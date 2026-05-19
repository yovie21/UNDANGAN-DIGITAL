import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getRsvps = () => api.get('/rsvps');
export const createRsvp = (data) => api.post('/rsvps', data);
export const deleteRsvp = (id) => api.delete(`/rsvps/${id}`);
export const getStatistics = () => api.get('/rsvps-statistics');

export default api;