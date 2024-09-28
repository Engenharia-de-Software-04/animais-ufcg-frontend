import { getAnimalByID } from "@/app/service";

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