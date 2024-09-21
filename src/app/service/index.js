import api from "./api"

export const getAllAnimals = async () => {
    const res = await api.get(`/animal/getAll`)
    return res
}

export const deleteAnimal = async (animalToRemove) => {
    const res = await api.delete(`/animal/${animalToRemove}`)
    return res
}
