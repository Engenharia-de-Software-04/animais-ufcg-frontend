import "./styles.css";

export default function FormInput({placeholder, contentEditable, sizeInput}) {
    return(
        <div>
            <input type="text" className={`input-${sizeInput}`} placeholder={placeholder} contentEditable={contentEditable}/>
        </div>
    );
    

}