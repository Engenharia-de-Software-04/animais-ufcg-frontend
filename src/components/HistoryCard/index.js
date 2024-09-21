"use client";
import "./styles.css";

export default function HistoryCard(props) {
    return (
        <div className="history-card">
            <div className="history-card-right">
                <div className="sick-dog-wrapper" 
                     style={{ backgroundImage: `url(${props.backgroundImage})`}}>
                </div>
            </div>
            <div className="history-card-left">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                {props.isAdmin && (
                    <div className="button-adoption-history-wrapper">
                        <button onClick={props.handleOpenModel} className="button-adoption-history" type="button">Remover</button>
                        <button className="button-adoption-history" type="button">Editar</button>
                    </div>
                )}
            </div>
        </div>
    )
}
