export const url = "https://coding-challenge-api.aerolab.co/";

export const apiFetch = async (endpoint, headers) => {
    const response = await fetch(endpoint, { headers });
    const data = await response.json();
    return data;
};
