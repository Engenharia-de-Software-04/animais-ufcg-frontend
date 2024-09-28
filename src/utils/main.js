export const mapImage = (animal) => {
  if (animal.photo) {
    const byteCharacters = atob(animal.photo);
    const byteNumbers = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const blob = new Blob([byteNumbers]);
    animal.photo = URL.createObjectURL(blob);
  }

  return animal;
};
