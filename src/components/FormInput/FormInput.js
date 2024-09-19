import "./styles.css";

export default function FormInput({placeholder, contentEditable, sizeInput}) {
    return(
        <div>
            <input type="text" className={`generic-input input-${sizeInput}`} placeholder={placeholder} contentEditable={contentEditable}/>
        </div>
    );
    

}