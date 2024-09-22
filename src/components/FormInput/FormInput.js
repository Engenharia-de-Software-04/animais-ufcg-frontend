"use client";
import "./styles.css";

export default function FormInput({placeholder, contentEditable, sizeInput, name}) {
    return(
        <div>
            <input type="text" name={name} className={`generic-input input-${sizeInput}`} placeholder={placeholder} contentEditable={contentEditable}/>
        </div>
    );
}