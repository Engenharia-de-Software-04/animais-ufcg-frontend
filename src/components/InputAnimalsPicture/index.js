import { useRef, useState, useEffect } from "react";
import "./styles.css";

export default function InputAnimalsPicture({ name, initialImage }) {
    const [imageSrc, setImageSrc] = useState("images/animals-input.png");
    const [textImage, setTextImage] = useState("Adicionar<br/>foto");
    const textImageRef = useRef(null);
    const imgRef = useRef(null);
    const inputWrapperRef = useRef(null);

    useEffect(() => {
        if (initialImage) {
            setImageSrc(`data:image/jpeg;base64,${initialImage}`); // Supondo que a imagem seja JPEG
            setTextImage("Alterar<br/>foto");
            
            if (imgRef.current) {
                imgRef.current.classList.remove("img-input-animals-main");
                imgRef.current.classList.add("img-input-animals-secondary");
            }

            if (textImageRef.current) {
                textImageRef.current.classList.remove("input-animals-text-main");
                textImageRef.current.classList.add("input-animals-text-secondary");
            }

            if (inputWrapperRef.current) {
                inputWrapperRef.current.classList.remove("input-file-wrapper-main");
                inputWrapperRef.current.classList.add("input-file-wrapper-secondary");
            }
        }
    }, [initialImage]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result); // Armazena a imagem em Base64
                setTextImage("Alterar<br/>foto");
                
                if (imgRef.current) {
                    imgRef.current.classList.remove("img-input-animals-main");
                    imgRef.current.classList.add("img-input-animals-secondary");
                }

                if (textImageRef.current) {
                    textImageRef.current.classList.remove("input-animals-text-main");
                    textImageRef.current.classList.add("input-animals-text-secondary");
                }

                if (inputWrapperRef.current) {
                    inputWrapperRef.current.classList.remove("input-file-wrapper-main");
                    inputWrapperRef.current.classList.add("input-file-wrapper-secondary");
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <div className="input-animals-wrapper">
            <img ref={imgRef} className="img-input-animals-main img-input-animals" src={imageSrc} alt="imagem de gato e cachorro dormindo abraçados"/>
            <div ref={inputWrapperRef} className="input-file-wrapper-main input-file-wrapper">
                <input name={name} className="input-file" type="file" onChange={handleFileChange}/>
            </div>
            <p ref={textImageRef} className="input-animals-text input-animals-text-main" dangerouslySetInnerHTML={{ __html: textImage }}></p>
        </div>
    );
}