// 项目助手：其他都是通用了，此文件仅用于当前项目

export default {
    // wgs84 坐标系转为 bd09 坐标系 的 BMapGL.Point
    // 传入-经纬度坐标二维数组
    async wgs84ToBd09Point(coordArray, callback) {
        let { chunk } = await import('lodash-es');

        let pointsArray = coordArray.reduce((sum, v) => {
            sum.push(new BMapGL.Point(...v));
            return sum;
        }, []);
        // 二维-10个一组
        pointsArray = chunk(pointsArray, 10);

        const convertor = new BMapGL.Convertor();

        for (let points of pointsArray) {
            // 分组请求
            await new Promise((resolve, reject) => {
                // 参数 2 3 标识从哪个坐标系到哪个坐标系
                // https://lbsyun.baidu.com/jsdemo.htm#Translategroup
                convertor.translate(points, 1, 5, (data) => {
                    switch (data.status) {
                        case 0:
                            data.points = data.points.map(v => new BMapGL.Point(v.lng, v.lat));
                            // 回调传入转换后的 points
                            callback(data.points);

                            resolve();
                            break;
                        default:
                            reject(data);
                    }
                });
            })
        }
    }
}