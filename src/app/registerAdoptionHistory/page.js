'use client';
import Menu from '@/components/Menu';
import './styles.css';
import FormInput from '@/components/FormInput/FormInput';
import TextArea from '@/components/TextArea';
import InputAnimalsPicture from '@/components/InputAnimalsPicture';
import { postAdoptionHistory } from '../service';
import { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function RegisterAdoptionHistory() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePostAdoptionHistory = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const fileInput = formData.get('photo');

    if (
      formData.get('animalOwnerName') == '' ||
      formData.get('animalID') == '' ||
      formData.get('adoptionReport') == '' ||
      formData.get('photo') == ''
    ) {
      setError('Os atributos não podem ser vazios');
    } else {
      if (fileInput && fileInput instanceof File) {
        const reader = new FileReader();

        reader.onload = async () => {
          const base64String = reader.result.split(',')[1];

          formData.set('photo', base64String);

          try {
            const res = await postAdoptionHistory(formData);
            router.push('/adoptionHistoryAdmin');
            setError('');
          } catch (error) {
            setError('Dados inválidos');
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
    }
  };

  return (
    <div>
      <Menu />
      <div className="register-adoption-history-wrapper">
        <div className="register-adoption-history-title">
          <h1>Cadastro</h1>
        </div>
        <div className="register-adoption-history-body">
          <form onSubmit={handlePostAdoptionHistory}>
            <InputAnimalsPicture name="photo" />
            <FormInput placeholder="Tutor" name="animalOwnerName" />
            <FormInput placeholder="Animal" name="animalID" />
            <TextArea placeholder="Relato" name="adoptionReport" />
            {error && (
              <Text color="red.500" mb="1rem">
                {error}
              </Text>
            )}
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
