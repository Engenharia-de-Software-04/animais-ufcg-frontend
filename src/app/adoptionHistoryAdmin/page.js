"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import HistoryCard from "@/components/HistoryCard";
import Animals from "@/components/Animals";
import { useEffect, useState } from "react";
import { deleteAdoptionHistory, getAllAdoptionHistories, getAnimalByID } from "../service";
import { useSession } from "next-auth/react";
import ConfirmBox from "@/components/ConfirmBox/ConfirmBox";
import { useRouter } from "next/navigation";

export default function AdoptionHistory() {
    const [adoptionHistoryList, setAdoptionHistoryList] = useState([]);
    const [adoptionHistoryToRemove, setAdoptionHistoryToRemove] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const { data: session } = useSession();
    const router = useRouter();

    const handleRemove = () => {
        const callDeleteAdoptionHistory = async () => {
            try {
                const resposta = await deleteAdoptionHistory(adoptionHistoryToRemove);
            } catch (error) {
                console.error("Erro ao deletar o relato de adoção:", error);
            }
        };
        callDeleteAdoptionHistory();

        setAdoptionHistoryList((prevAdoptionHistory) =>
            prevAdoptionHistory.filter((adoptionHistory) => adoptionHistory.id !== adoptionHistoryToRemove)
        );
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenModal = (id) => {
        setAdoptionHistoryToRemove(id);
        setModalOpen(true);
    }

    const handleEdit = (id) => {
        router.push(`/editAdoptionHistory?id=${id}`)
    }

    useEffect(() => {
        const fetchAdoptionHistory = async () => {
            try {
                const resposta = await getAllAdoptionHistories();
        
                const adoptionHistory = await Promise.all(resposta.data.map(async (adoptionHistoryCurrent) => {
                    if (adoptionHistoryCurrent.photo) {    
                        const byteCharacters = atob(adoptionHistoryCurrent.photo);
                        const byteNumbers = new Uint8Array(byteCharacters.length);
        
                        for (let i = 0; i < byteCharacters.length; i++) {
                            byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
        
                        const blob = new Blob([byteNumbers]);
                        adoptionHistoryCurrent.photo = URL.createObjectURL(blob);
                    }
        
                    if (adoptionHistoryCurrent.animalID) {
                        const animalResponse = await getAnimalByID(adoptionHistoryCurrent.animalID);
                        adoptionHistoryCurrent["name"] = animalResponse.data.animalName;
                    }
        
                    return adoptionHistoryCurrent;
                }));
        
                console.log(adoptionHistory);
                setAdoptionHistoryList(adoptionHistory);
            } catch (error) {
                console.error("Erro ao buscar animais:", error);
            }
        };

        fetchAdoptionHistory();
    }, []);

    return <div className="adoption-history-wrapper">
        <Menu/>
        <Animals title="Patas e histórias"/>
        <div className='adoption-history'>
            <div className="history-cards">
                {adoptionHistoryList.map((adoptionHistory) => (
                    <HistoryCard
                        key={adoptionHistory.id}
                        id={adoptionHistory.id}
                        name={adoptionHistory.name}
                        backgroundImage={adoptionHistory.photo}
                        description={adoptionHistory.adoptionReport}
                        isAdmin={!!session}
                        handleOpenModel={handleOpenModal}
                        onRemove={() => handleOpenModal(adoptionHistory.id)}
                        onEdit={() => handleEdit(adoptionHistory.id)}
                    />
                ))}
            </div>
        </div>
        <ConfirmBox
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            onConfirm={handleRemove} 
            message="Você tem certeza que deseja remover o cadastro do animal?" 
        />
    </div>;
}