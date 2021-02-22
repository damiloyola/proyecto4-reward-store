import { url, apiFetch } from "./api";

const headers = {
    "Content-Type": "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYyNGY4OGIxYjllMDAwMjA3OWJjYTMiLCJpYXQiOjE2MDk3MTU1OTJ9.MiwZzBMBTSWaFp80feWST423MIsVqflb5X9hLQIpgVU",
};

export const fetchCoins = async (amount, user, setUser) => {
    let raw = JSON.stringify({ amount: amount });
    const options = {
        method: "POST",
        headers: headers,
        body: raw,
    };

    const endpoint = `${url}user/points`;

    const result = await fetch(endpoint, options);
    const newCoins = await result.json();

    const newUser = { ...user };
    newUser.points = newCoins["New Points"];
    setUser(newUser);
};
