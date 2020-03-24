import axios, {AxiosRequestConfig} from 'axios'

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
    baseURL: isDev ? 'http://localhost:3000/': ''
});


service.interceptors.request.use((config:AxiosRequestConfig) =>{
    return config;
})

service.interceptors.response.use((resp) => {
    if(resp.status === 200) {
        return resp.data;
    } else {
        // 处理全局错误
    }
});

export const getArticles = () => {

    return service.get('/article');
}