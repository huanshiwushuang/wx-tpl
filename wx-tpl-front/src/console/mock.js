export default async function response(response) {
    const url = response.config.url;

    console.group(`Mock 数据---${url}`);
    console.info(response);
    console.groupEnd(`Mock 数据---${url}`);
}