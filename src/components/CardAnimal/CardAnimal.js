import "./styles.css";

export default function CardAnimal(props) {

    const statusClass = props.status === "AVAILABLE" ? "available" : "adopted";
    
    return (
        <div className="card">
            <div className="tags-container">
                <p className="tag">{props.estagioDeVida}</p>
                {props.admin ? 
                    <p className={`tag ${statusClass}`}>{props.status}</p>
                :
                    <></>
                }
            </div>
            <img
                src={props.imageUrl}
                alt={props.name}
                className="img"
            />
            <div className="container-text">
                <h1 className="name">{props.name}</h1>
                <p className="description">{props.description}</p>
            </div>
            {props.admin ?
                <div className="buttons">
                    <button className="button">Editar</button>
                    <button onClick={props.onRemove} className="button">Remover</button>
                </div> 
            :
                <button className="adoption-button"><span className="material-symbols-outlined">pets</span> Quero adotar</button>
            }
        </div>
    );
};
