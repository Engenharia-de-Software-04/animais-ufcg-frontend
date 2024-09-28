import { getAnimalByID } from "@/app/service";

/**
 * Converte a representação em base64 da foto de um animal em uma URL de objeto.
 *
 * @param {Object} element - O objeto que contém a informação do animal, incluindo a foto em formato base64.
 * @returns {Object} - O objeto original com o campo 'photo' atualizado para uma URL de objeto.
 * 
**/
export const mapImage = (element) => {
  if (element.photo) {
    const byteCharacters = atob(element.photo);
    const byteNumbers = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const blob = new Blob([byteNumbers]);
    element.photo = URL.createObjectURL(blob);
  }

  return element;
};

/**
 * Mapeia o histórico de adoção, adicionando a foto do animal e o nome do animal correspondente ao registro de adoção.
 *
 * @param {Object} adoptionHistory - O objeto que contém o histórico de adoção, incluindo a foto e o ID do animal.
 * @returns {Promise<Object>} - Uma Promise que resolve para o objeto de histórico de adoção atualizado com a foto e o nome do animal.
 *
 **/
export const mapAdoptionHistoryImageAndAnimal = async (adoptionHistory) => {
  let adoptionHistoryWithPhoto = await mapImage(adoptionHistory)

  if (adoptionHistoryWithPhoto.animalID) {
    const animalResponse = await getAnimalByID(
      adoptionHistory.animalID,
    );
    adoptionHistoryWithPhoto['name'] = animalResponse.data.animalName;
  }

  return adoptionHistoryWithPhoto;
}