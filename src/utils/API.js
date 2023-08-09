import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://jewelapi.onrender.com/",
});

export const getProducts = async () => {
    try {
        const baseUrl = "https://jewelapi.onrender.com/api/data";

        const url = `${baseUrl}`;

        console.log(url); // This will log the correct URL for debugging purposes

        return axiosAPI.get(url);
    } catch (err) {
        console.log("Error Validating User: ", err);
    }
};