import requestMjs from "./utils/request.mjs";

(async () => {
    let res = await requestMjs.get_juzi(2);

    console.log(res);
})()