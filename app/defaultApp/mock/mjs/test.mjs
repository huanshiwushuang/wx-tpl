import requestMjs from "./helper/request.mjs";

(async () => {
    let res = await requestMjs.get_juzi(2);

    console.log(res);
})()