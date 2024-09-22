"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { useRouter } from "next/navigation";
import { getAdoptionHistoryByID, getAllAnimals, getAnimalByID, updateAdoptionHistory } from "../service";
import Menu from "@/components/Menu";
import InputAnimalsPicture from "@/components/InputAnimalsPicture";
import FormInput from "@/components/FormInput/FormInput";
import TextArea from "@/components/TextArea";

export default function EditAdoptionHistory() {
    const [adoptionHistory, setAdoptionHistory] = useState({});
    const [animalID, setAnimalID] = useState({});
    const [error, setError] = useState('');
    const [id, setId] = useState();
    const router = useRouter();

    useEffect(() => {
        if (id) {
          const callGetAdoptionHistoryByID = async (id) => {
            try {
              const res = await getAdoptionHistoryByID(id);
              const animal = await getAnimalByID(res.data["animalID"]);
              setAnimalID(res.data["animalID"])

              // Atualize o estado com os dados da adoção e o nome do animal
              setAdoptionHistory({ ...res.data, "animalID": animal.data.animalName });
            } catch (err) {
              setError('Erro ao carregar os dados do animal.');
            }
          };
    
          callGetAdoptionHistoryByID(id);
        }
      }, [id]);

    useEffect(() => {
        const getIdFromQuery = () => {
          const params = new URLSearchParams(window.location.search);
          return params.get('id');
        };
      
        const id = getIdFromQuery();
        setId(id);
    }, []);

    const handleEditAdoptionHistory = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const fileInput = formData.get("photo");
    
        const reader = new FileReader();
                    
        reader.onload = async () => {
            const base64String = reader.result.split(',')[1];
            
            // Atualiza a imagem no estado
            setAdoptionHistory((prevData) => ({ ...prevData, photo: base64String }));
    
            // Atualiza o formData com a nova imagem
            formData.set('photo', base64String);
    
            try {
                // Aqui você usa o estado atualizado
                const animals = await getAllAnimals();
                const currentAnimalName = adoptionHistory.animalID
                const currentAnimal = animals.data.filter(animal => animal.animalName == currentAnimalName)
                console.log({ ...adoptionHistory, photo: base64String, animalID: animalID })
                if (currentAnimal.length != 0) {
                    const res = await updateAdoptionHistory(id, { ...adoptionHistory, photo: base64String, animalID: currentAnimal[0].id });
                    router.push('/adoptionHistory'); // Redireciona para a lista após a edição
                } else {
                    setError('Animal não existente no sistema');
                }
            } catch (err) {
                console.log(err);
                setError('Erro ao atualizar os dados do animal.');
            }
        };
        
        reader.onerror = (error) => {
            console.error('Erro ao ler o arquivo:', error);
            setError("Erro ao ler o arquivo");
        };
        
        reader.readAsDataURL(fileInput);
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdoptionHistory({ ...adoptionHistory, [name]: value });
    };

    return (
        <div>
            <Menu/>
            <div className="register-adoption-history-wrapper">
                <div className="register-adoption-history-title">
                    <h1>Edição</h1>
                </div>
                <div className="register-adoption-history-body">
                    <form onSubmit={handleEditAdoptionHistory}>
                        {Object.keys(adoptionHistory).length > 0 ? (
                            <>
                                <InputAnimalsPicture name="photo" initialImage={adoptionHistory.photo} />
                                <FormInput value={adoptionHistory.animalOwnerName || ''} onChange={handleInputChange} placeholder="Tutor" name="animalOwnerName" />
                                <FormInput value={adoptionHistory.animalID || ''} onChange={handleInputChange} placeholder="Animal" name="animalID" />
                                <TextArea value={adoptionHistory.adoptionReport || ''} onChange={handleInputChange} placeholder="Relato" name="adoptionReport" />
                            </>
                        ) : (
                            <p style={{padding: "20px 0px"}}>Carregando dados...</p>
                        )}
                        {error && (
                            <p style={{ color: "red" }}>
                                {error}
                            </p>
                        )}
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}