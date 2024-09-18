"use client";
import React, { useState } from "react";
import CardAnimal from "@/components/CardAnimal/CardAnimal";
import Menu from "@/components/Menu";
import "./styles.css";
import ConfirmBox from "@/components/ConfirmBox/ConfirmBox";
import Animals from "@/components/Animals"

export default function AnimalList() {



    const initialAnimals = [
        {
            id: 2,
            name: "Leão rei da selva master",
            description: "O leão é um dos distância.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/01/92/88/92/1000_F_192889200_hkcMoxvT0CgFcuzgDW1IAAhgvDLslSxZ.jpg",
            estagioDeVida: "Filhote",
            status: "Adotado"
        },
        {
            id: 3,
            name: "Tigre das montanhas",
            description: "",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/01/92/88/92/1000_F_192889200_hkcMoxvT0CgFcuzgDW1IAAhgvDLslSxZ.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 4,
            name: "Elefante africano",
            description: "Os elefantes são conhecidos por sua memória incrível e inteligência. Este elefante africano vive em planícies e é um líder em seu grupo.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/02/98/67/47/1000_F_298674709_wk4u5F93KM8vZh3GDpBq56t6Op8TSUvb.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 5,
            name: "Girafa pescoço longo",
            description: "A girafa usa seu longo pescoço para alcançar folhas no topo das árvores. Elas são herbívoras e vivem nas savanas africanas.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/68/55/89/1000_F_268558971_TAEovWGPmF6SiRtDLJKhB3wbxAem6uFc.jpg",
            estagioDeVida: "Juvenil",
            status: "Adotado"
        },
        {
            id: 6,
            name: "Zebra das planícies",
            description: "As zebras vivem em grandes manadas nas planícies africanas e são constantemente ameaçadas por predadores.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/02/67/67/54/1000_F_267675429_DuMIq1u1vwnmqei99TxMuZokjK2cqvJh.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 7,
            name: "Hipopótamo do Nilo",
            description: "Os hipopótamos são encontrados em rios e lagos da África. Apesar de sua aparência calma, são conhecidos por serem territoriais.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/01/94/09/45/1000_F_194094506_VPzjNEkNCyueVDowrrcIH99aDrShGGWn.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 8,
            name: "Rinoceronte branco",
            description: "Os rinocerontes brancos são uma das maiores espécies de mamíferos da Terra e estão frequentemente sob ameaça devido à caça ilegal.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/96/88/16/1000_F_296881647_EJWrVr5JpkMUp9mwvUVtmxg60ijEgAlQ.jpg",
            estagioDeVida: "Filhote",
            status: "Adotado"
        },
        {
            id: 9,
            name: "Cheetah veloz",
            description: "O guepardo é o animal terrestre mais rápido, capaz de atingir altas velocidades em curtas distâncias.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/30/14/55/1000_F_230145538_o4z53m0pHKIjMNFLMXZLD5ybcFFMghlP.jpg",
            estagioDeVida: "Juvenil",
            status: "Disponível"
        },
        {
            id: 10,
            name: "Chimpanzé inteligente",
            description: "Os chimpanzés são extremamente inteligentes e conhecidos por suas habilidades de uso de ferramentas e comportamento social complexo.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/00/96/27/65/1000_F_96276526_ZWa43pPnA51vMfG0rBHWXxjRJIVmlW8B.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 11,
            name: "Gorila das montanhas",
            description: "O gorila é o maior dos primatas vivos e vive em grupos altamente sociais nas montanhas da África central.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/00/50/78/30/1000_F_50783040_fCpSLvseLz1Q9GtftV6jt8lh2lSq4sCc.jpg",
            estagioDeVida: "Adulto",
            status: "Adotado"
        },
        {
            id: 12,
            name: "Rinoceronte branco",
            description: "Os rinocerontes brancos estão em perigo devido à caça ilegal, mas esforços de conservação têm ajudado a proteger essa espécie única.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/96/88/16/1000_F_296881647_EJWrVr5JpkMUp9mwvUVtmxg60ijEgAlQ.jpg",
            estagioDeVida: "Filhote",
            status: "Adotado"
        },
        {
            id: 13,
            name: "Cheetah veloz",
            description: "O guepardo é o animal mais rápido do planeta e utiliza sua velocidade para capturar presas em espaços abertos.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/30/14/55/1000_F_230145538_o4z53m0pHKIjMNFLMXZLD5ybcFFMghlP.jpg",
            estagioDeVida: "Juvenil",
            status: "Disponível"
        },
        {
            id: 14,
            name: "Chimpanzé inteligente",
            description: "Chimpanzés compartilham aproximadamente 98% de seu DNA com os humanos, o que reflete sua inteligência e capacidade de resolver problemas.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/00/96/27/65/1000_F_96276526_ZWa43pPnA51vMfG0rBHWXxjRJIVmlW8B.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 15,
            name: "Gorila das montanhas",
            description: "Os gorilas das montanhas são criaturas impressionantes, vivendo em regiões remotas e formando laços sociais complexos com outros membros do grupo.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/00/50/78/30/1000_F_50783040_fCpSLvseLz1Q9GtftV6jt8lh2lSq4sCc.jpg",
            estagioDeVida: "Adulto",
            status: "Adotado"
        }
        
    ];

    const [animalsList, setAnimalsList] = useState(initialAnimals);
    const [isModalOpen, setModalOpen] = useState(false);
    const [animalToRemove, setAnimalToRemove] = useState(null)

    const handleRemove = () => {
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

    return (
        <div className="page-container">
            <Menu />
            <Animals title="Todos os animais cadastrados"/>
                <div className="container">
                    {animalsList.map((animal) => (
                        <CardAnimal
                            id= {animal.id}
                            key={animal.id}
                            name={animal.name}
                            description={animal.description}
                            imageUrl={animal.imageUrl}
                            estagioDeVida={animal.estagioDeVida}
                            status={animal.status}
                            onRemove={() => handleOpenModal(animal.id)}
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