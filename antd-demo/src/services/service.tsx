import axios, {AxiosRequestConfig} from 'axios'
import {message} from "antd";
import {Article} from "../views/Article/Article";

const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
    baseURL: isDev ? 'http://localhost:3000/': ''
});


service.interceptors.request.use((config:AxiosRequestConfig) =>{
    config.data = Object.assign({}, config.data, {
        authToken: 'itisourtoken'
    })
    return config;
})

service.interceptors.response.use((resp) => {

    return resp.data;

},  (error) => {
    // Do something with response error
    message.error('This is an error message');
});

export const getArticles = ({offset = 0, limited = 0}) => {

    return service.get('/article', {
        params : {
            offset,
            limited
        }
    });
}

export const deleteArticle = async (id: number) => {
    await service.delete(`/article/${id}`);
}

export const getArticleById = async (id: string) => {

    const article = await service.get(`/article/${id}`);

    return article;
}

export const updateArticle = async (article: Article) => {

    const result = await service.put(`/article/`, article);

    return result;
}

export const getKpiArticleAmountByMonthYear = async () => {
    return await service.post(`/article/kpi/amount/month`)
}