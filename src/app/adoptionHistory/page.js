'use client';
import './styles.css';

import Menu from '@/components/Menu';
import HistoryCard from '@/components/HistoryCard';
import Animals from '@/components/Animals';
import { useEffect, useState } from 'react';
import { getAllAdoptionHistories, getAnimalByID } from '../service';

export default function AdoptionHistory() {
  const [adoptionHistoryList, setAdoptionHistoryList] = useState([]);

  useEffect(() => {
    const fetchAdoptionHistory = async () => {
      try {
        const resposta = await getAllAdoptionHistories();

        const adoptionHistory = await Promise.all(
          resposta.data.map(async (adoptionHistoryCurrent) => {
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
              const animalResponse = await getAnimalByID(
                adoptionHistoryCurrent.animalID,
              );
              adoptionHistoryCurrent['name'] = animalResponse.data.animalName;
            }

            return adoptionHistoryCurrent;
          }),
        );

        console.log(adoptionHistory);
        setAdoptionHistoryList(adoptionHistory);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };

    fetchAdoptionHistory();
  }, []);

  return (
    <div className="adoption-history-wrapper">
      <Menu />
      <Animals title="Patas e histórias" />
      <div className="adoption-history">
        <div className="history-cards">
          {adoptionHistoryList.map((adoptionHistory) => (
            <HistoryCard
              key={adoptionHistory.id}
              id={adoptionHistory.id}
              name={adoptionHistory.name}
              backgroundImage={adoptionHistory.photo}
              description={adoptionHistory.adoptionReport}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
