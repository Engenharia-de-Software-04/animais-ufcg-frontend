import axios from 'axios';
import { getSession } from 'next-auth/react';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
        request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
  });
  
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        handleError(error);
    },
);

export const postAdmin = async (formData) => {
    const res = await api.post(`/auth/register`, formData)
    return res
}
