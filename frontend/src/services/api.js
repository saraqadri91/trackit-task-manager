import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
});

export const loginAPI = (data) => API.post('/auth/login', data);
export const registerAPI = (data) => API.post('/auth/register', data);
export const getTasksAPI = () => API.get('/tasks');
export const createTaskAPI = (data) => API.post('/tasks', data);
export const updateTaskAPI = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTaskAPI = (id) => API.delete(`/tasks/${id}`);
