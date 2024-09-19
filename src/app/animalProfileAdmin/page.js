"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import FormInput from "@/components/FormInput/FormInput";
import FormSelect from "@/components/FormSelect/FormSelect";
import TextArea from "@/components/TextArea";

export default function animalProfileAdmin(){

    return( 
    <div>
        <Menu/>
        <img src="images/cat.png" alt="gato"/>
        <input type="file"/>
        <div className="register-grid">
            <FormInput placeholder="Nome" contentEditable={false} sizeInput="small"/>
            <FormInput placeholder="Raça" sizeInput="small"/>
            <FormSelect defaultValue="Sexo" options={["Macho", "Fêmea"]}/>
            <FormSelect defaultValue="Tipo" options={["Gato", "Cachorro", "Outro"]}/>
            <FormSelect defaultValue="Estágio da vida" options={["Filhote", "Adulto", "Idoso"]}/>
            <FormSelect defaultValue="É castrado ?" options={["Castrado", "Não castrado"]}/>
            <FormSelect defaultValue="É vacinado ?" options={["Vacinado", "Não vacinado"]}/>
        </div>
        
        {/* <FormInput placeholder="Descrição" sizeInput="big" /> */}
        <TextArea placeholder="Relato"/>
        <button className="button-save">Salvar</button>

        
    </div>
    );
}