import Axios from 'axios'
import config from '../config'

// Axios
const axiosInstance = Axios.create({});

// 请求拦截
axiosInstance.interceptors.request.use(async (request_config) => {
    // 模拟数据
    if (config.is_mock) {
        let [
            Mock,
            { default: mock_data }
        ] = await Promise.all([
            import('mockjs'),
            import('../mock/main')
        ])
        // 循环应用 mock 规则
        for (let item of mock_data) {
            Mock.mock(item.rurl, item.rtype, item.mock_template);
        }
    }

    return request_config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axiosInstance.interceptors.response.use(async (response) => {
    // 模拟数据
    if (config.is_mock) {
        let { default: console_mock } = await import('../console/mock');
        console_mock(response);
    }
    /* 
    (检查数据 && 只有 content-type 是 json 才 check) || (空数据需要校验)
    */
    if (
        (config.is_check && /json/i.test(response.headers['content-type'])) ||
        !response.data
    ) {
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