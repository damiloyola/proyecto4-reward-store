import { url, apiFetch } from "./api";

export const fetchProducts = async (setProducts) => {
    const endpoint = `${url}products`;

    const newProducts = await apiFetch(endpoint);
    console.log(newProducts);
    setProducts(newProducts);
};
