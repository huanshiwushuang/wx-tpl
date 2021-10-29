import Axios from 'axios';

// Axios
const axiosInstance = Axios.create({});

// 请求拦截
axiosInstance.interceptors.request.use((config) => {
    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axiosInstance.interceptors.response.use(async (response) => {
    return response;
}, error => {
    return Promise.reject(error);
})

export default {
    axios: axiosInstance,
    get(url, data, config) {
        return axiosInstance.get(url, {
            params: data,
            ...config,
        })
    },
    post(url, data, config) {
        return axiosInstance.post(url, data, config)
    },
};