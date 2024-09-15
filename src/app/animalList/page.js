"use client";
import React, { useState } from "react";
import CardAnimal from "@/components/CardAnimal/CardAnimal";
import Menu from "@/components/Menu";
import "./styles.css";
import back from "../../../assets/images/background.png"
import ConfirmBox from "@/components/ConfirmBox/ConfirmBox";
import Animals from "@/components/Animals"

export default function AnimalList() {



    const initialAnimals = [
        {   id: 2,
            name: "Leão rei da selva master",
            description: "O leão é uma das criaturas mais majestosas da fauna africana. Conhecido por sua juba imponente e seu rugido poderoso, ele é frequentemente chamado de Rei da Selva, embora na realidade habite savanas e planícies. Os leões são animais sociais, vivendo em grupos familiares chamados de alcateias, onde cada membro desempenha um papel importante na caça e no cuidado dos filhotes.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/06/03/12/98/1000_F_603129857_kAcWWTL4JMXz3kJ1zZsww7evhhPLXcOQ.jpg",
            estagioDeVida: "Filhote",
            status: "Adotado"
        },
        {
            id: 3,
            name: "Tigre das montanhas",
            description: "Os tigres são felinos majestosos e solitários, habitando grandes áreas territoriais. Este tigre em particular habita montanhas, o que torna seu comportamento ainda mais impressionante, adaptando-se ao ambiente rochoso e frio.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/01/92/88/92/1000_F_192889200_hkcMoxvT0CgFcuzgDW1IAAhgvDLslSxZ.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {   id: 4,
            name: "Elefante africano",
            description: "Os elefantes são conhecidos por sua memória incrível e inteligência. Este elefante africano vive em planícies, movendo-se em grupos liderados por fêmeas experientes. Eles desempenham um papel crucial no ecossistema.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/02/98/67/47/1000_F_298674709_wk4u5F93KM8vZh3GDpBq56t6Op8TSUvb.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 5,
            name: "Girafa pescoço longo",
            description: "A girafa é o animal terrestre mais alto, usando seu longo pescoço para alcançar folhas no topo das árvores. Elas são herbívoras e vivem em grupos nas savanas africanas.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/68/55/89/1000_F_268558971_TAEovWGPmF6SiRtDLJKhB3wbxAem6uFc.jpg",
            estagioDeVida: "Juvenil",
            status: "Adotado"
        },
        {
            id: 6,
            name: "Zebra das planícies",
            description: "As zebras são conhecidas por suas listras distintas, únicas para cada indivíduo. Elas vivem em grandes manadas nas planícies africanas, sendo constantemente ameaçadas por predadores como leões e hienas.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/02/67/67/54/1000_F_267675429_DuMIq1u1vwnmqei99TxMuZokjK2cqvJh.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 7,
            name: "Hipopótamo do Nilo",
            description: "Os hipopótamos são animais semi-aquáticos encontrados em rios e lagos da África. Apesar de sua aparência calma, são conhecidos por serem extremamente territoriais e perigosos.",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/01/94/09/45/1000_F_194094506_VPzjNEkNCyueVDowrrcIH99aDrShGGWn.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 8,
            name: "Rinoceronte branco",
            description: "Os rinocerontes brancos são uma das maiores espécies de mamíferos da Terra. Com sua pele espessa e chifres característicos, eles são frequentemente caçados ilegalmente, embora esforços de conservação estejam em andamento.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/96/88/16/1000_F_296881647_EJWrVr5JpkMUp9mwvUVtmxg60ijEgAlQ.jpg",
            estagioDeVida: "Filhote",
            status: "Adotado"
        },
        {
            id: 9,
            name: "Cheetah veloz",
            description: "O guepardo é o animar velocidsua velocidade é uma vantagem significativa.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/30/14/55/1000_F_230145538_o4z53m0pHKIjMNFLMXZLD5ybcFFMghlP.jpg",
            estagioDeVida: "Juvenil",
            status: "Disponível"
        },
        {
            id: 10,
            name: "Chimpanzé inteligente",
            description: "",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/00/96/27/65/1000_F_96276526_ZWa43pPnA51vMfG0rBHWXxjRJIVmlW8B.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 11,
            name: "Gorila das montanhas",
            description: "O gorila é o maior dos primatas vivos, vivendo nas regiões montanhosas da África central. Eles são altamente sociais, vivendo em pequenos grupos liderados por um macho dominante, conhecido como 'prata'.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/00/50/78/30/1000_F_50783040_fCpSLvseLz1Q9GtftV6jt8lh2lSq4sCc.jpg",
            estagioDeVida: "Adulto",
            status: "Adotado"
        },
        {
            id: 12,
            name: "Rinoceronte branco",
            description: "Os rinocerontes brancos são uma das maiores espécies de mamíferos da Terra. Com sua pele espessa e chifres característicos, eles são frequentemente caçados ilegalmente, embora esforços de conservação estejam em andamento.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/96/88/16/1000_F_296881647_EJWrVr5JpkMUp9mwvUVtmxg60ijEgAlQ.jpg",
            estagioDeVida: "Filhote",
            status: "Adotado"
        },
        {
            id: 13,
            name: "Cheetah veloz",
            description: "O guepardo é o animar velocidsua velocidade é uma vantagem significativa.",
            imageUrl: "https://as2.ftcdn.net/v2/jpg/02/30/14/55/1000_F_230145538_o4z53m0pHKIjMNFLMXZLD5ybcFFMghlP.jpg",
            estagioDeVida: "Juvenil",
            status: "Disponível"
        },
        {
            id: 14,
            name: "Chimpanzé inteligente",
            description: "",
            imageUrl: "https://as1.ftcdn.net/v2/jpg/00/96/27/65/1000_F_96276526_ZWa43pPnA51vMfG0rBHWXxjRJIVmlW8B.jpg",
            estagioDeVida: "Adulto",
            status: "Disponível"
        },
        {
            id: 15,
            name: "Gorila das montanhas",
            description: "O gorila é o maior dos primatas vivos, vivendo nas regiões montanhosas da África central. Eles são altamente sociais, vivendo em pequenos grupos liderados por um macho dominante, conhecido como 'prata'.",
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
