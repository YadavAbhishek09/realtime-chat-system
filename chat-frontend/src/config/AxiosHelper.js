import axios from "axios";
export const baseURL = "http://localhost:8080"

export const HttpClient = axios.create({
    baseURL:baseURL
});
