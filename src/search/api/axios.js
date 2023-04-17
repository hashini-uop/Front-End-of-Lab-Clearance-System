import axios from "axios";

export const api = axios.create({
    baseURL : "http://localhost:8080/equipment/getAll"
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}