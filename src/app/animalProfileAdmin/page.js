"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import FormInput from "@/components/FormInput/FormInput";
import FormSelect from "@/components/FormSelect/FormSelect";
import TextArea from "@/components/TextArea";
import InputAnimalsPicture from "@/components/InputAnimalsPicture";

export default function animalProfileAdmin(){

    return( 
    <div>
        <Menu/>
        <h1 className="page-title">Cadastro</h1>
        <form className="top-form">
            <InputAnimalsPicture/>
            <div className="center-form">
                <FormInput className ="form-input" placeholder="Nome" contentEditable={false} />
                <FormInput className ="form-input" placeholder="Raça" sizeInput="small"/>
                <FormSelect className="form-select" defaultValue="Sexo" options={["Macho", "Fêmea"]}/>
                <FormSelect className="form-select" defaultValue="Tipo" options={["Gato", "Cachorro", "Outro"]}/>
                <FormSelect className="form-select" defaultValue="Estágio da vida" options={["Filhote", "Adulto", "Idoso"]}/>
                <FormSelect className="form-select" defaultValue="É castrado ?" options={["Castrado", "Não castrado"]}/>
                <FormSelect className="form-select" defaultValue="É vacinado ?" options={["Vacinado", "Não vacinado"]}/>
            </div>
            
            <div className="text-area-container">
                <TextArea className="text-area" placeholder="Relato"/>
            </div>
            

            <button className="button-save">Salvar</button>
        </form>
        

        
    </div>
    );
}