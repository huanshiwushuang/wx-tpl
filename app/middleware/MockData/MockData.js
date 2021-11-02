const Mock = require('mockjs-async');


console.log(process.argv.slice(2));

(async () => {
    let res = await Mock.mock({
        'name': '@cname',
    })

    console.log(JSON.stringify(res));
})()
