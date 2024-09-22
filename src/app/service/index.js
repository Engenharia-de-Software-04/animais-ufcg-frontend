import api from "./api"

export const getAllAnimals = async () => {
    const res = await api.get(`/animal/getAll`)
    return res
}

export const deleteAnimal = async (animalToRemove) => {
    const res = await api.delete(`/animal/${animalToRemove}`)
    return res
}

export const postAdoptionHistory = async (adoptionHistory) => {
    const animals =  await getAllAnimals()

    animals["data"].forEach(animal =>  {
        if(animal["animalName"].toLowerCase() == adoptionHistory.get("animalID").toLowerCase())
            adoptionHistory.set("animalID", animal["id"])
    });

    const res = await api.post(`/adoption_report/create`, adoptionHistory)
    return res
}

export const getAllAdoptionHistories = async () => {
    const res = await api.get(`/adoption_report/getAll`)
    return res
}

export const getAnimalByID = async (id) => {
    const res = await api.get(`/animal/${id}`)
    return res
}

export const deleteAdoptionHistory = async (id) => {
    const res = await api.delete(`/adoption_report/${id}`)
    return res
}

export const postAnimal = async (formData) => {
    const res = await api.post(`/animal/create`, formData)
    return res
}