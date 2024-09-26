"use client";
import React, { useEffect, useState } from "react";
import CardAnimal from "@/components/CardAnimal/CardAnimal";
import Menu from "@/components/Menu";
import "./styles.css";
import ConfirmBox from "@/components/ConfirmBox/ConfirmBox";
import Animals from "@/components/Animals"
import { deleteAnimal, getAllAvailable} from "../service/index";
import { useRouter } from "next/navigation";

export default function AnimalList() {
    const [animalsList, setAnimalsList] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [animalToRemove, setAnimalToRemove] = useState(null);
    const router = useRouter()

    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const resposta = await getAllAvailable();
                
                const animals = resposta.data.map(a => {
                    if (a.photo) {    
                        const byteCharacters = atob(a.photo);
                        const byteNumbers = new Uint8Array(byteCharacters.length);
            
                        for (let i = 0; i < byteCharacters.length; i++) {
                            byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
            
                        const blob = new Blob([byteNumbers]);
                        a.photo = URL.createObjectURL(blob);
                    }

                    return a;
                });

                const filtredAnimals = animals.filter(animal => animal.statusAnimal == "AVAILABLE")
                
                setAnimalsList(filtredAnimals);
            } catch (error) {
                console.error("Erro ao buscar animais:", error);
            }
        };

        fetchAnimals();
    }, []);

    const handleEditAnimal = (id) => {
        router.push(`/animalProfileAdminEdit?id=${id}`);
    }

    const handleRemove = () => {
        const callDeleteAnimal = async () => {
            try {
                const resposta = await deleteAnimal(animalToRemove);
            } catch (error) {
                console.error("Erro ao buscar animais:", error);
            }
        };
        callDeleteAnimal();

        setAnimalsList((prevAnimais) =>
            prevAnimais.filter((animal) => animal.id !== animalToRemove)
        );
        setModalOpen(false);
        setAnimalToRemove(null);
    };

    const handleOpenModal = (id) => {
        setAnimalToRemove(id);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handlewExpandView = (id) => {
        router.push(`/viewAnimal?id=${id}`);
    }

    return (
        <div className="page-container">
            <Menu />
            <Animals title="Todos os nossos amigatos disponíveis"/>
                <div className="container">
                    {animalsList.map((animal) => (
                        <CardAnimal
                            id= {animal.id}
                            key={animal.id}
                            name={animal.animalName}
                            description={animal.animalDescription}
                            imageUrl={animal.photo}
                            status={animal.statusAnimal}
                            onRemove={() => handleOpenModal(animal.id)}
                            admin={false}
                            onEdit={() => handleEditAnimal(animal.id)}
                            onView={() => handlewExpandView(animal.id)}
                            estagioDeVida={
                                animal.animalAge === 'YOUNG' 
                                  ? 'Jovem' 
                                  : animal.animalAge === 'ADULT' 
                                  ? 'Adulto' 
                                  : 'Velho'
                              }
                        />
                    ))}
                    <ConfirmBox
                        isOpen={isModalOpen} 
                        onClose={handleCloseModal} 
                        onConfirm={handleRemove} 
                        message="Você tem certeza que deseja remover o cadastro do animal?" 
                    />
                </div>
        </div>
    );
}