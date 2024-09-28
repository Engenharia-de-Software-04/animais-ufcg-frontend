'use client';
import { useEffect, useState } from 'react';
import './styles.css';
import { getAnimalByID } from '../service';
import Menu from '@/components/Menu';

export default function ViewAnimal() {
  const [animal, setAnimal] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    const getIdFromQuery = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get('id');
    };

    const id = getIdFromQuery();
    setId(id);
  }, []);

  useEffect(() => {
    if (id) {
      const callGetAnimalByID = async (id) => {
        try {
          const res = await getAnimalByID(id);
          const animal = res.data;
          const byteCharacters = atob(animal.photo);
          const byteNumbers = new Uint8Array(byteCharacters.length);

          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }

          const blob = new Blob([byteNumbers]);
          animal.photo = URL.createObjectURL(blob);

          setAnimal(animal);
        } catch (err) {
          console.log('Erro ao carregar os dados do animal.');
        }
      };

      callGetAnimalByID(id);
    }
  }, [id]);

  return (
    <>
      <Menu />
      <div className="view-wrapper">
        <div className="view-header">
          <div className="animal-img-wrapper">
            <img src={animal.photo}></img>
          </div>
          <div className="content">
            <h1>{animal.animalName}</h1>
            <button className="adoption-button">Adotar</button>
          </div>
        </div>
        <div className="view-body">
          <div className="description-right">
            <ul>
              <li>
                Sexo: {animal.animalSex == 'FEMALE' ? 'feminino' : 'masculino'}
              </li>
              <li>Idade: {animal.animalAge}</li>
              <li>Castrado: {animal.animalIsCastrated ? 'sim' : 'não'}</li>
              <li>Vacinado: {animal.animalIsVaccinated ? 'sim' : 'não'}</li>
            </ul>
          </div>
          <div className="description-left">
            <div className="description-wrapper">
              <h2>Descrição</h2>
              <p>{animal.animalDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
