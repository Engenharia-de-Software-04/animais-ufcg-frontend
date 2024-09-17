import Menu from "@/components/Menu";
import "./styles.css"

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
                        <input type="text" placeholder="Tutor"/>
                        <input type="text" placeholder="Animal"/>
                        <input type="text" placeholder="Relato"/>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}