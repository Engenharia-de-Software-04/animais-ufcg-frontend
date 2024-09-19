"use client";
import "./styles.css";

    export default function HistoryCard({ isAdmin }) {
    return (
        <div className="history-card">
            <div className="history-card-right">
                <div className="sick-dog-wrapper"></div>
            </div>
            <div className="history-card-left">
                <h2>Gatinha Nina</h2>
                <p>Nina chegou tímida e assustada, mas logo se tornou carinhosa e brincalhona. Agora, é a dona do sofá e adora se esquentar ao sol, trazendo alegria e aconchego ao nosso lar com seu ronronar tranquilizador. Adotar a Nina foi como ganhar uma amiga fiel e especial. </p>
                {isAdmin && (
                    <div className="button-adoption-history-wrapper">
                        <button className="button-adoption-history" type="button">Remover</button>
                        <button className="button-adoption-history" type="button">Editar</button>
                    </div>
                )}
            </div>
        </div>
    )
}
