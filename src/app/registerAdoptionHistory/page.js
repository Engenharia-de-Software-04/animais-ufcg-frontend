"use client";
import Menu from "@/components/Menu";
import "./styles.css"
import FormInput from "@/components/FormInput/FormInput";
import TextArea from "@/components/TextArea";
import InputAnimalsPicture from "@/components/InputAnimalsPicture";
import { postAdoptionHistory } from "../service";

export default function RegisterAdoptionHistory() {
    const handlePostAdoptionHistory = async (event) => {
        event.preventDefault();
        console.log(event);
        const form = event.target;
        const formData = new FormData(form);
    
        const fileInput = formData.get('photo'); 
    
        if (fileInput && fileInput instanceof File) {
            const reader = new FileReader();
            
            reader.onload = async () => {
                const base64String = reader.result.split(',')[1];
                
                formData.set('photo', base64String);
    
                try {
                    const res = await postAdoptionHistory(formData);
                    console.log('História de adoção cadastrada com sucesso:', res);
                } catch (error) {
                    console.error('Erro ao cadastrar a história de adoção:', error);
                }
            };
            
            reader.onerror = (error) => {
                console.error('Erro ao ler o arquivo:', error);
            };
            
            reader.readAsDataURL(fileInput);
        } else {
            console.error('Nenhum arquivo encontrado.');
        }
    }

    return (
        <div>
            <Menu/>
            <div className="register-adoption-history-wrapper">
                <div className="register-adoption-history-title">
                    <h1>Cadastro</h1>
                </div>
                <div className="register-adoption-history-body">
                    <form onSubmit={handlePostAdoptionHistory}>
                        <InputAnimalsPicture name="photo"/>
                        <FormInput placeholder="Tutor" name="animalOwnerName"/>
                        <FormInput placeholder="Animal" name="animalID"/>
                        <TextArea placeholder="Relato" name="adoptionReport"/>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}