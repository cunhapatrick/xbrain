import axios from 'axios';

const api = axios.create({
	baseURL: 'xxx',
});

export const list = (url) => api.get(url);

export const create = (url, params) => api.post(url, params);

export const mutate = (url, params) => api.update(url, params);

export const destroy = (url) => api.delete(url);
