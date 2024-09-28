'use client';
import './styles.css';

import Menu from '@/components/Menu';
import HistoryCard from '@/components/HistoryCard';
import Animals from '@/components/Animals';
import { useEffect, useState } from 'react';
import { getAllAdoptionHistories, getAnimalByID } from '../service';
import { mapAdoptionHistoryImageAndAnimal, mapImage } from '@/utils/main';

export default function AdoptionHistory() {
  const [adoptionHistoryList, setAdoptionHistoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptionHistory = async () => {
      try {
        const resposta = await getAllAdoptionHistories();
        const adoptionHistory = await Promise.all(
          resposta.data.map(mapAdoptionHistoryImageAndAnimal),
        );

        setAdoptionHistoryList(adoptionHistory);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      } finally {
        setLoading(false);
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
          {loading ? (
              <div style={{display: "flex", justifyContent: "center"}}>
                <p>Carregando...</p>
              </div>)
            :
              (adoptionHistoryList.map((adoptionHistory) => (
                <HistoryCard
                  key={adoptionHistory.id}
                  id={adoptionHistory.id}
                  name={adoptionHistory.name}
                  backgroundImage={adoptionHistory.photo}
                  description={adoptionHistory.adoptionReport}
                />
              )))}
        </div>
      </div>
    </div>
  );
}
