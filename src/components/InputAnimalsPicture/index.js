import { useState } from "react";
import "./styles.css";

export default function InputAnimalsPicture() {
    const [imageSrc, setImageSrc] = useState("images/animals-input.png");
    const [topImage, setTopImage] = useState("-10px");
    const [textImage, setTextImage] = useState("Adicionar<br/>foto");
    const [topTextImage, setTopTextImage] = useState("-50px");
    const [colorText, setColorText] = useState("#000");
    const [opacityText, setOpacityText] = useState("1");
    const [borderImage, setBorderImage] = useState("2px solid #000");



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newImageSrc = URL.createObjectURL(file);
            setImageSrc(newImageSrc);
            setTopImage("0px")
            setTopTextImage("-100px")
            setTextImage("Alterar<br/>foto")
            setColorText("#FFFFFF")
            setOpacityText("0.8")
            setBorderImage("none")
        }
    };

    return(
        <div className="input-animals-wrapper">
            <img className="img-input-animals" style={{top: topImage}}  src={imageSrc} alt="imagem de gato e cachorro dormindo abraçados"/>
            <div className="input-file-wrapper" style={{border: borderImage}}>
                <input className="input-file"  type="file" onChange={handleFileChange}/>
            </div>
            <p className="input-animals-text" style={{top: topTextImage, color: colorText, opacity: opacityText}} dangerouslySetInnerHTML={{ __html: textImage }}></p>
        </div>
    );
}

