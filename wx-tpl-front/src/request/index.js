import Axios from 'axios'
import { is_mock, is_check } from '../config'

// Axios
const axiosInstance = Axios.create({});

// 请求拦截
axiosInstance.interceptors.request.use(async (config) => {
    // 模拟数据
    if (is_mock) {
        let [
            Mock,
            mock_data
        ] = await Promise.all([
            import('mockjs'),
            import('../mock/main')
        ])
        // 循环应用 mock 规则
        mock_data.forEach(item => {
            Mock.mock(item.rurl, item.rtype, item.template);
        })
    }

    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axiosInstance.interceptors.response.use(async (response) => {
    // 模拟数据
    if (is_mock) {
        let { default: console_mock } = await import('../console/mock');
        console_mock(response);
    }
    // 检查数据
    // 只有 content-type 是 json 才 check
    if (is_check && /json/i.test(response.headers['content-type'])) {
        let { default: console_check } = await import('../console/check');
        console_check(response);
    }

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