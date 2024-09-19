"use client";
import "./styles.css";

import Menu from '@/components/Menu';
import HistoryCard from "@/components/HistoryCard";
import Animals from "@/components/Animals";
import { useState } from "react";
import ConfirmBox from "@/components/ConfirmBox/ConfirmBox";

export default function AdoptionHistory() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleRemove = () => {
        // setAnimalsList((prevAnimais) =>
        //     prevAnimais.filter((animal) => animal.id !== animalToRemove)
        // );
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    return <div className="adoption-history-wrapper">
        <Menu/>
        <Animals title="Patas e histórias"/>
        <div className='adoption-history'>
            <div className="history-cards">
                <HistoryCard isAdmin={true} handleOpenModel={handleOpenModal}/>
                <HistoryCard isAdmin={true} handleOpenModel={handleOpenModal}/>
                <HistoryCard isAdmin={true} handleOpenModel={handleOpenModal}/>
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