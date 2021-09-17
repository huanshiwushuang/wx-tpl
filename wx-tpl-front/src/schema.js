// 导入-合并-项目根目录下 api 文件见内的所有 前端 json5 配置，导出为 一个大的 js 对象
const modulesFiles = require.context('@/../../schema', true, /\.front\.json5$/)

// webpack 读取目录下的所有的 json5 文件
const sum = modulesFiles.keys().reduce((sum, modulePath) => {

    const value = modulesFiles(modulePath)

    const json = value.default;

    // 所有 json5 文件
    sum = {
        ...sum,
        ...json
    }

    return sum
}, {})

export default sum

