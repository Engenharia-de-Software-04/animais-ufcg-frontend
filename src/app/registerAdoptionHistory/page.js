"use client";
import Menu from "@/components/Menu";
import "./styles.css"
import FormInput from "@/components/FormInput/FormInput";
import TextArea from "@/components/TextArea";
import InputAnimalsPicture from "@/components/InputAnimalsPicture";

export default function RegisterAdoptionHistory() {
    return (
        <div>
            <Menu/>
            <div className="register-adoption-history-wrapper">
                <div className="register-adoption-history-title">
                    <h1>Cadastro</h1>
                </div>
                <div className="register-adoption-history-body">
                    <form>
                        <InputAnimalsPicture/>
                        <FormInput placeholder="Tutor"/>
                        <FormInput placeholder="Animal"/>
                        <TextArea placeholder="Relato"/>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}