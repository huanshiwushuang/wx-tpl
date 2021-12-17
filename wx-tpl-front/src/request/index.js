import Axios from 'axios';
import config from '../config';

// Axios
export const axios_options = {
    baseURL: config.axiosBaseUrl,
};
const axiosInstance = Axios.create(axios_options);

// 请求拦截
axiosInstance.interceptors.request.use(async (request_config) => {

    let a = document.createElement('a');
    a.href = request_config.url;
    let url = new URL(a.href);
    // 如果 url 没有 mock, 就使用 config 的 isMock 配置
    if (!url.searchParams.has('mock')) {
        if (config.isMock) {
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
    if (config.isCheck) {
        // 需要被校验的 JSON 数据
        let check_data = response.data.json;

        let { default: consoleCheck } = await import('../console/check');

        let a = document.createElement('a');
        a.href = response.config.url;
        let url = new URL(a.href);

        consoleCheck({
            pathname: url.pathname,
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