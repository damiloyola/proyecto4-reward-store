import { url, apiFetch } from "./api";

const headers = {
    "Content-Type": "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYyNGY4OGIxYjllMDAwMjA3OWJjYTMiLCJpYXQiOjE2MDk3MTU1OTJ9.MiwZzBMBTSWaFp80feWST423MIsVqflb5X9hLQIpgVU",
};

export const fetchHistory = async (setPurchaseHistory) => {
    const endpoint = `${url}user/history`;

    const history = await apiFetch(endpoint, headers);

    setPurchaseHistory(history);
};
