'use client';
import './styles.css';

import Menu from '@/components/Menu';
import FormInput from '@/components/FormInput/FormInput';
import FormSelect from '@/components/FormSelect/FormSelect';
import TextArea from '@/components/TextArea';
import InputAnimalsPicture from '@/components/InputAnimalsPicture';
import { useState } from 'react';
import { postAnimal } from '../service';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function AnimalProfileAdmin() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePostAnimal = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const fileInput = formData.get('photo');

    formData.set(
      'animalIsCastrated',
      formData.get('animalIsCastrated') == 'CADASTRADO',
    );
    formData.set(
      'animalIsVaccinated',
      formData.get('animalIsVaccinated') == 'VACINADO',
    );

    if (formData.get('statusAnimal') == 'ADOTADO') {
      formData.set('statusAnimal', 'ADOPTED');
    } else {
      formData.set('statusAnimal', 'AVAILABLE');
    }

    if (formData.get('animalSex') == 'MACHO') {
      formData.set('animalSex', 'MALE');
    } else {
      formData.set('animalSex', 'FEMALE');
    }

    if (formData.get('animalSpecie') == 'CACHORRO') {
      formData.set('animalSpecie', 'DOG');
    } else if (formData.get('animalSpecie') == 'GATO') {
      formData.set('animalSpecie', 'CAT');
    } else {
      formData.set('animalSpecie', 'OTHER');
    }

    if (formData.get('animalAge') == 'FILHOTE') {
      formData.set('animalAge', 'YOUNG');
    } else if (formData.get('animalAge') == 'ADULTO') {
      formData.set('animalAge', 'ADULT');
    } else {
      formData.set('animalAge', 'SENIOR');
    }

    const formObject = Object.fromEntries(formData.entries());

    if (fileInput && fileInput instanceof File) {
      const reader = new FileReader();

      reader.onload = async () => {
        const base64String = reader.result.split(',')[1];

        formData.set('photo', base64String);

        console.log(Object.fromEntries(formData.entries()));

        try {
          const res = await postAnimal(formData);
          router.push('/animalListAdmin');
          setError('');
        } catch (error) {
          console.log(error);
          setError('Dados inválidos ou erro no servidor');
        }
      };

      reader.onerror = (error) => {
        console.error('Erro ao ler o arquivo:', error);
        setError('Erro ao ler o arquivo');
      };

      reader.readAsDataURL(fileInput);
    } else {
      console.error('Nenhum arquivo encontrado.');
      setError('Nenhum arquivo encontrado');
    }
  };

  return (
    <div>
      <Menu />
      <h1 className="page-title">Cadastro</h1>
      <form className="top-form" onSubmit={handlePostAnimal}>
        <InputAnimalsPicture name="photo" />
        <div className="center-form">
          <FormInput
            name="animalName"
            className="form-input"
            placeholder="Nome"
            contentEditable={false}
          />
          <FormSelect
            name="statusAnimal"
            className="form-select"
            defaultValue="Status"
            options={['ADOTADO', 'DISPONÍVEL']}
          />
          <FormSelect
            name="animalSex"
            className="form-select"
            defaultValue="Sexo"
            options={['MACHO', 'FÊMEA']}
          />
          <FormSelect
            name="animalSpecie"
            className="form-select"
            defaultValue="Tipo"
            options={['CACHORRO', 'GATO', 'OUTRO']}
          />
          <FormSelect
            name="animalAge"
            className="form-select"
            defaultValue="Estágio da vida"
            options={['FILHOTE', 'ADULTO', 'VELHO']}
          />
          <FormSelect
            name="animalIsCastrated"
            className="form-select"
            defaultValue="É castrado ?"
            options={['CASTRADO', 'NÃO CASTRADO']}
          />
          <FormSelect
            name="animalIsVaccinated"
            className="form-select"
            defaultValue="É vacinado ?"
            options={['VACINADO', 'NÃO VACINADO']}
          />
        </div>

        <div className="text-area-container">
          <TextArea
            name="animalDescription"
            className="text-area"
            placeholder="Descrição"
          />
        </div>

        {error && (
          <Text color="red.500" mb="1rem">
            {error}
          </Text>
        )}

        <button type="submit" className="button-save">
          Salvar
        </button>
      </form>
    </div>
  );
}
