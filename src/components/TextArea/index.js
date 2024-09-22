import "./styles.css";

export default function TextArea({placeholder, name}) {
    return(
        <div>
            <textarea name={name} className="generic-textarea text-area" rows="1" cols="55" placeholder={placeholder}/>
        </div>
    );
    

}