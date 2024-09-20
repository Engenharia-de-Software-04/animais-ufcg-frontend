import api from './api';

export const postAdmin = async (formData) => {
    const res = await api.post(`/auth/register`, formData)
    return res

}

