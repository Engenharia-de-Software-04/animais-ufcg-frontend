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
            </div>
        </div>
    )
}
