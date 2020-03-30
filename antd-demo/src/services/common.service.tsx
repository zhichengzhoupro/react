import axios, {AxiosRequestConfig} from "axios";
import {message} from "antd";

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

const serviceWithOutInterceptor = axios.create({
    baseURL: isDev ? 'http://localhost:3000/': ''
});

export  {
    service,
    serviceWithOutInterceptor
};
