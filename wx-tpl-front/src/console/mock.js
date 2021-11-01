export default async function response(response) {
    const url = response.config.url;

    console.group(`Mock 数据---${url}`);

    // 请求数据
    let req_data = response.config.data;
    try {
        req_data = JSON.parse(req_data);
    } catch(e) {
        1+1;
    }

    console.info(`请求数据`, req_data);
    console.info(`响应数据`, response.data);
    console.info(`完整响应`, response);

    console.groupEnd(`Mock 数据---${url}`);
}