import axios from 'axios'

const ajax = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getPosts = () => {
    const data =  ajax.get("/todo");
    return data;
}