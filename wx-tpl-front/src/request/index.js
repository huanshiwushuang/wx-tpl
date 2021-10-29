import Axios from 'axios'
import { is_mock, is_check } from '../config'
import Mock from 'mockjs'

// Axios
const axiosInstance = Axios.create({});

// 请求拦截
axiosInstance.interceptors.request.use(async (config) => {
    // 模拟数据
    if (is_mock) {
        await import('../mock/main');
    }

    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
axiosInstance.interceptors.response.use(async (response) => {
    const url = response.config.url;
    // 模拟数据
    if (is_mock) {
        console.group(`Mock 数据---${url}`);
        console.info(response);
        console.groupEnd(`Mock 数据---${url}`);
    }
    // 检查数据
    if (is_check) {
        await import('../mock/main');

        console.group(`Check 数据---${url}`);

        const reg = new RegExp(`^${url}$`, 'i');
        const arr = Object.values(Mock._mocked).filter(item => {
            return reg.test(item.rurl);
        });
        const count = arr.length;

        switch (count) {
            case 0:
                console.warn(`未找到 check 规则`);
                break;
            case 1:
                if (['object', 'string'].includes(typeof arr[0].template)) {
                    let result = Mock.valid(arr[0].template, response.data);

                    if (result.length) {
                        console.error('check 不通过');
                        console.error('check 规则', arr[0].template);
                        console.error('check 数据', response.data);
                        console.error('check 结果', result);
                    } else {
                        console.info('check 通过');
                    }

                } else {
                    console.error(`check 规则只能是对象 or 字符串`);
                    console.error(`当前规则`, arr[0].template);
                }
                break;

        }

        console.groupEnd(`Check 数据---${url}`);
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