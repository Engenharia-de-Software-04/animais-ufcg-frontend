"use client";
import "./styles.css";
import Menu from "@/components/Menu";
import FormInput from "@/components/FormInput/FormInput";
import FormSelect from "@/components/FormSelect/FormSelect";
import TextArea from "@/components/TextArea";
import InputAnimalsPicture from "@/components/InputAnimalsPicture";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAnimalByID, updateAnimal } from "../service";

export default function EditAnimal() {
  const [animalData, setAnimalData] = useState(null);
  const [error, setError] = useState("");
  const [id, setId] = useState();
  const router = useRouter();

  useEffect(() => {
    const getIdFromQuery = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    };

    const id = getIdFromQuery();
    setId(id);
  }, []);

  useEffect(() => {
    if (id) {
      const callGetAnimalByID = async (id) => {
        try {
          const res = await getAnimalByID(id);
          setAnimalData(res.data);
        } catch (err) {
          setError("Erro ao carregar os dados do animal.");
        }
      };

      callGetAnimalByID(id);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "animalIsCastrated") {
      updatedValue = value === "CASTRADO";
    } else if (name === "animalIsVaccinated") {
      updatedValue = value === "VACINADO";
    }

    if (name === 'statusAnimal') {
      updatedValue = value === 'ADOTADO' ? 'ADOPTED' : 'AVAILABLE'
    }

    if (name == 'animalSex') {
      updatedValue = value === 'MACHO' ? 'MALE' : 'FEMALE'
    }

    if ( name == 'animalSpecie') {
      updatedValue = value === 'CACHORRO' ? 'DOG': 'GATO' ? 'CAT' : 'OTHER'
    }

    if ( name == 'animalAge') {
      updatedValue = value === 'FILHOTE' ? 'YOUNG' : 'ADULTO' ? 'ADULT' : 'SENIOR'
    }

    setAnimalData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const fileInput = formData.get("photo");

    const reader = new FileReader();

    reader.onload = async () => {
      const base64String = reader.result.split(",")[1];

      setAnimalData((prevData) => ({ ...prevData, photo: base64String }));

      formData.set("photo", base64String);

      try {
        console.log({ ...animalData, photo: base64String });
        const res = await updateAnimal(id, {
          ...animalData,
          photo: base64String,
        });
        router.push("/animalListAdmin"); 
      } catch (err) {
        console.log(err);
        setError("Erro ao atualizar os dados do animal.");
      }
    };

    reader.onerror = (error) => {
      console.error("Erro ao ler o arquivo:", error);
      setError("Erro ao ler o arquivo");
    };

    reader.readAsDataURL(fileInput);
  };

  if (!animalData) return <div>Carregando...</div>;

  return (
    <div>
      <Menu />
      <h1 className="page-title">Edição</h1>
      <form className="top-form" onSubmit={handleSubmit}>
        <InputAnimalsPicture name="photo" initialImage={animalData.photo} />

        <div className="center-form">
          <FormInput
            className="form-input"
            placeholder="Nome"
            name="animalName"
            value={animalData.animalName}
            onChange={handleInputChange}
          />

          <FormSelect
            defaultValue={animalData.statusAnimal === 'ADOCTED' ? 'ADOTADO' : 'DISPONÍVEL' || "Status"}
            onChange={handleInputChange}
            name="statusAnimal"
            className="form-select"
            options={["ADOTADO", "DISPONÍVEL"]}
          />
          <FormSelect
            className="form-select"
            defaultValue={animalData.animalSex === 'MALE' ? 'MACHO' : 'FÊMEA' || "Sexo"}
            options={["MACHO", "FÊMEA"]}
            name="animalSex"
            onChange={handleInputChange}
          />
          <FormSelect
            className="form-select"
            defaultValue={animalData.animalSpecie === 'DOG' ? 'CACHOROO' : 'CAT' ? 'GATO' : 'OUTRO'|| "Tipo"}
            options={["CACHORRO", "GATO", "OUTRO"]}
            name="animalSpecie"
            onChange={handleInputChange}
          />
          <FormSelect
            className="form-select"
            defaultValue={animalData.animalAge === 'YOUNG' ? 'FILHOTE' : 'ADULT' ? 'ADULTO' : 'VELHO' || "Estágio da vida"}
            options={["FILHOTE", "ADULTO", "VELHO"]}
            name="animalAge"
            onChange={handleInputChange}
          />
          <FormSelect
            className="form-select"
            defaultValue={
              animalData.animalIsCastrated ? "CASTRADO" : "NÃO CASTRADO"
            }
            options={["CASTRADO", "NÃO CASTRADO"]}
            name="animalIsCastrated"
            onChange={handleInputChange}
          />
          <FormSelect
            className="form-select"
            defaultValue={
              animalData.animalIsVaccinated ? "VACINADO" : "NÃO VACINADO"
            }
            options={["VACINADO", "NÃO VACINADO"]}
            name="animalIsVaccinated"
            onChange={handleInputChange}
          />
        </div>

        <div className="text-area-container">
          <TextArea
            className="text-area"
            placeholder="Relato"
            name="animalDescription"
            value={animalData.animalDescription}
            onChange={handleInputChange}
          />
        </div>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        <button type="submit" className="button-save">
          Editar
        </button>
      </form>
    </div>
  );
}
