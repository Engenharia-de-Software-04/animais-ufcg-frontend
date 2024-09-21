import api from './api';

export const postAdmin = async (formData) => {
    console.log(API_BASE_URL)
    console.log("/auth/register")
    const res = await api.post(`/auth/register`, formData)
    return res

}

