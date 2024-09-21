import "./styles.css";

export default function TextArea({placeholder}) {
    return(
        <div>
            <textarea className="generic-textarea text-area" placeholder={placeholder}/>
        </div>
    );
    

}