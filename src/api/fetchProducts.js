import { url, apiFetch } from "./api";

const headers = {
    "Content-Type": "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYyNGY4OGIxYjllMDAwMjA3OWJjYTMiLCJpYXQiOjE2MDk3MTU1OTJ9.MiwZzBMBTSWaFp80feWST423MIsVqflb5X9hLQIpgVU",
};

export const fetchProducts = async (setProducts) => {
    const endpoint = `${url}products`;

    const newProducts = await apiFetch(endpoint, headers);

    setProducts(newProducts);
};
