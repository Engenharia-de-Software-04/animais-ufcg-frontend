import { useRef, useState } from "react";
import "./styles.css";

export default function InputAnimalsPicture() {
    const [imageSrc, setImageSrc] = useState("images/animals-input.png");
    const [textImage, setTextImage] = useState("Adicionar<br/>foto");
    const textImageRef = useRef(null);
    const imgRef = useRef(null);
    const inputWrapperRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const newImageSrc = URL.createObjectURL(file);
            setImageSrc(newImageSrc);
            setTextImage("Alterar<br/>foto")
            
            if (imgRef.current) {
                imgRef.current.classList.remove("img-input-animals-main");
                imgRef.current.classList.add("img-input-animals-secondary");
            }

            if (textImageRef.current) {
                textImageRef.current.classList.remove("input-animals-text-main");
                textImageRef.current.classList.add("input-animals-text-secondary");
            }

            if (inputWrapperRef.current) {
                inputWrapperRef.current.classList.remove("input-file-wrapper-main")
                inputWrapperRef.current.classList.add("input-file-wrapper-secondary")
            }
        }
    };

    return(
        <div className="input-animals-wrapper">
            <img ref={imgRef} className="img-input-animals-main img-input-animals" src={imageSrc} alt="imagem de gato e cachorro dormindo abraçados"/>
            <div ref={inputWrapperRef} className="input-file-wrapper-main input-file-wrapper">
                <input className="input-file"  type="file" onChange={handleFileChange}/>
            </div>
            <p ref={textImageRef} className="input-animals-text input-animals-text-main" dangerouslySetInnerHTML={{ __html: textImage }}></p>

        </div>
    );
}

