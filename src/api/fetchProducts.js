import {url, apiFetch } from './api'


export const fetchProducts = () => {
    const endpoint = `${url}products`;
    return apiFetch(endpoint);
  };