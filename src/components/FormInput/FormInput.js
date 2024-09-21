import "./styles.css";

export default function FormInput({placeholder, contentEditable}) {
    return(
        <div>
            <input type="text" className="generic-input" placeholder={placeholder} contentEditable={contentEditable}/>
        </div>
    );
    

}