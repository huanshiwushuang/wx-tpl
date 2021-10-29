export default {
    // 针对一些可能 单双引号 混用的不合法的json，处理，使用场景很少
    normalize(str) {
        return str
            .replace(/'/g, '"').replace(/[\s\r\n]*([\][{},"])[\s\r\n]*/g, '$1').replace(/,([}\]])/g, '$1').replace(/([{,])([^:{"]+?):/g, '$1"$2":');
    }
}