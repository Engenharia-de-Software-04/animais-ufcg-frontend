"use client";
import "./styles.css";
import Menu from '@/components/Menu';
import ButtonMenu from "@/components/ButtonMenu/ButtonMenu";


export default function adminMenu() {
    return (
        <div className="container">
            <Menu/>
            <div className="container-text">
                <h2 className="text">Menu</h2>
            </div>
            <div className="container-menu">
                <ButtonMenu
                    color={"#9849FC"}
                    text={<>
                        Adicionar
                        <br />
                        Animal
                    </>}
                />

                <ButtonMenu
                    color={"#4998FC"}
                    text={<>
                        Cadastrar
                        <br />
                        Relato
                    </>}
                />

                <ButtonMenu
                    color={"#FFB223"}
                    text={<>
                        Listar Animais
                        <br />
                        Cadastrados
                </>}
                    />

                <ButtonMenu
                    color={"#FC7C49"}
                    text={<>
                        Listar
                        <br />
                        Relatos
                    </>}
                />
            </div>
        </div>
    );
}
