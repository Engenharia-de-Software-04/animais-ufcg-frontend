import api from "./api"

export const getAllAnimals = async () => {
    const res = await api.get(`/animal/getAll`)
    return res
}
