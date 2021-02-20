export const headers = {
    "Content-Type": "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYyNGY4OGIxYjllMDAwMjA3OWJjYTMiLCJpYXQiOjE2MDk3MTU1OTJ9.MiwZzBMBTSWaFp80feWST423MIsVqflb5X9hLQIpgVU",
};

export const url = "https://coding-challenge-api.aerolab.co/";

export const apiFetch = async (endpoint) => {
    const response = await fetch(endpoint, { headers });
    const data = await response.json();
    return data;
};
