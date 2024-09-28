'use client';
import './styles.css';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CardAnimal from '@/components/CardAnimal/CardAnimal';
import Menu from '@/components/Menu';
import Animals from '@/components/Animals';
import { getAllAvailable } from '../service/index';
import { mapImage } from '@/utils/main';

export default function AnimalList() {
  const [animalsList, setAnimalsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const resposta = await getAllAvailable();
        const animals = resposta.data.map(mapImage);

        setAnimalsList(animals);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const handlewExpandView = (id) => {
    router.push(`/viewAnimal?id=${id}`);
  };

  return (
    <div className="page-container">
      <Menu />
      <Animals title="Todos os nossos amigatos disponíveis" />
      <div className="container">
        {loading ? (
          <p>Carregando...</p>
        ) : (
          animalsList.map((animal) => (
            <CardAnimal
              id={animal.id}
              key={animal.id}
              name={animal.animalName}
              description={animal.animalDescription}
              imageUrl={animal.photo}
              status={animal.statusAnimal}
              admin={false}
              onView={() => handlewExpandView(animal.id)}
              estagioDeVida={
                animal.animalAge === 'YOUNG'
                  ? 'Jovem'
                  : animal.animalAge === 'ADULT'
                    ? 'Adulto'
                    : 'Velho'
              }
            />
          ))
        )}
      </div>
    </div>
  );
}
