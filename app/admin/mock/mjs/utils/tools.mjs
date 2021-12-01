// 仿 loadsh 数据处理库
export const _ = {
    // https://www.runoob.com/w3cnote/js-random.html
    // 生成指定范围随机数
    random_num(min, max) {
        var range = max - min;
        var random = Math.random();
        var num = min + Math.round(random * (range + 1));
        return num;
    }
}