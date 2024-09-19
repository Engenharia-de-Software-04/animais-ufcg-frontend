import "./styles.css";

export default function TextArea({placeholder}) {
    return(
        <div>
            <textarea className="generic-textarea" rows="1" cols="55" placeholder={placeholder}/>
        </div>
    );
    

}