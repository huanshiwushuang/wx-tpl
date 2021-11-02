const Mock = require('mockjs-async');

(async () => {
    let res = await Mock.mock({
        'name': '@cname',
    })

    console.log(JSON.stringify(res));
})()
