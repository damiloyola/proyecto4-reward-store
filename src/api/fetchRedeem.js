import { url, apiFetch } from "./api";

const headers = {
    "Content-Type": "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYyNGY4OGIxYjllMDAwMjA3OWJjYTMiLCJpYXQiOjE2MDk3MTU1OTJ9.MiwZzBMBTSWaFp80feWST423MIsVqflb5X9hLQIpgVU",
};

export const fetchRedeem = async (productId) => {
    let raw = JSON.stringify({ productId: productId });
    const options = {
        method: "POST",
        headers: headers,
        body: raw,
        redirect: "follow",
    };

    const endpoint = `${url}redeem`;

    await fetch(endpoint, options);
};
