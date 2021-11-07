import Axios from 'axios'
import config from '../config'

// Axios
const axiosInstance = Axios.create({});

// 请求拦截
axiosInstance.interceptors.request.use(async (request_config) => {

    let a = document.createElement('a');
    a.href = request_config.url;
    let url = new URL(a.href);

    // 如果 url 没有 mock, 就使用 config 的 is_mock 配置
    if (!url.searchParams.has('mock')) {
        if (config.is_mock) {
            url.searchParams.set('mock', 1);
        }
    }

    request_config.url = url;

    return request_config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axiosInstance.interceptors.response.use(async (response) => {
    /* 
    html 需要提取数据
    */
    if (/html/i.test(response.headers['content-type'])) {
        debugger
    }
    /* 
        检查数据
    */
    if (config.is_check) {
        let { default: console_check } = await import('../console/check');
        console_check(response);
    }

    return response.data;
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