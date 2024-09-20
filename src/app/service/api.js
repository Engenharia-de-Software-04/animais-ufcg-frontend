import axios from 'axios';
import { getSession } from 'next-auth/react';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
        request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
});

// Interceptor para tratar erros
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        handleError(error); // Defina a função handleError para tratar os erros
        return Promise.reject(error); // Adicione isso para garantir que o erro seja propagado
    }
);

export default api;
