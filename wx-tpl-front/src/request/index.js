import Axios from 'axios';
import config from '../config';

// Axios
export const axios_options = {
    baseURL: location.origin
};
const axiosInstance = Axios.create(axios_options);

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
    request_config.url = url.toString();

    return request_config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axiosInstance.interceptors.response.use(async (response) => {
    // 检查数据
    if (config.is_check) {
        // 需要被校验的 JSON 数据
        let check_data = response.data;

        // 有 tkd 的是 page 数据
        if (['t', 'k', 'd'].find(i => {
            return i in response.data;
        })) {
            check_data = response.data.json
        }

        let { default: console_check } = await import('../console/check');

        let a = document.createElement('a');
        a.href = response.config.url;
        let url = new URL(a.href);

        console_check({
            url: url.pathname,
            check_data,
        });

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