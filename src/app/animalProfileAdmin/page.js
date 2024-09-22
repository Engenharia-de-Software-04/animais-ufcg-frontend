"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import FormInput from "@/components/FormInput/FormInput";
import FormSelect from "@/components/FormSelect/FormSelect";
import TextArea from "@/components/TextArea";
import InputAnimalsPicture from "@/components/InputAnimalsPicture";
import { useState } from "react";
import { postAnimal } from "../service";
import { Text } from "@chakra-ui/react";

export default function animalProfileAdmin(){
    const [error, setError] = useState('');

    const handlePostAnimal = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const fileInput = formData.get('photo');
        
        formData.set("animalIsCastrated", formData.get("animalIsCastrated") == "Castrado")
        formData.set("animalIsVaccinated", formData.get("animalIsVaccinated") == "Vacinado")
        
        const formObject = Object.fromEntries(formData.entries());

        if (fileInput && fileInput instanceof File) {
            const reader = new FileReader();
            
            reader.onload = async () => {
                const base64String = reader.result.split(',')[1]; // Extrai apenas o conteúdo Base64
                
                formData.set('photo', base64String); // Sobrescreve o arquivo com Base64

                console.log(Object.fromEntries(formData.entries())); 
            
                try {
                    const res = await postAnimal(formData); // Faz o post
                    form.reset(); // Limpa o formulário após o envio
                    setError(""); // Limpa qualquer erro
                } catch (error) {
                    setError("Dados inválidos ou erro no servidor");
                }
            };
    
            reader.onerror = (error) => {
                console.error('Erro ao ler o arquivo:', error);
                setError("Erro ao ler o arquivo");
            };
    
            reader.readAsDataURL(fileInput); // Converte o arquivo em Base64
        } else {
            console.error('Nenhum arquivo encontrado.');
            setError("Nenhum arquivo encontrado");
        }
    };

    return ( 
    <div>
        <Menu/>
        <h1 className="page-title">Cadastro</h1>
        <form className="top-form" onSubmit={handlePostAnimal}>
            <InputAnimalsPicture name="photo"/>
            <div className="center-form">
                <FormInput  name="animalName"  className="form-input" placeholder="Nome" contentEditable={false} />
                <FormSelect name="statusAnimal" className="form-select" defaultValue="Status" options={["ADOPTED", "AVAILABLE"]}/>
                <FormSelect name="animalSex" className="form-select" defaultValue="Sexo" options={["MALE", "FEMALE"]}/>
                <FormSelect name="animalSpecie" className="form-select" defaultValue="Tipo" options={["DOG", "CAT", "OTHER"]}/>
                <FormSelect name="animalAge" className="form-select" defaultValue="Estágio da vida" options={["YOUNG", "ADULT", "SENIOR" ]}/>
                <FormSelect name="animalIsCastrated" className="form-select" defaultValue="É castrado ?" options={["Castrado", "Não castrado"]}/>
                <FormSelect name="animalIsVaccinated" className="form-select" defaultValue="É vacinado ?" options={["Vacinado", "Não vacinado"]}/>
            </div>
            
            <div className="text-area-container">
                <TextArea name="animalDescription" className="text-area" placeholder="Descrição"/>
            </div>

            {error && (
                <Text color="red.500" mb="1rem">
                    {error}
                </Text>
            )}

            <button type="submit" className="button-save">Salvar</button>
        </form>
        

        
    </div>
    );
}