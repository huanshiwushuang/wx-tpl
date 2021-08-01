# 前端项目说明 from [戊戌数据](https://www.wuxuwang.com)
1. 项目不推荐使用 scoped

   个人推荐以当前毫秒时间戳的 36 进制字符串作为 class（的前缀），
   以保证全局不重复，方便搜索查找, 还可以减少选择器的嵌套。
   比如：

   .krk156cn_header
   ```
   Date.now().toString(36)
   ```
   我个人有写个小工具，输入 sjc，再按空格键，即可自动输入当前时间戳。【windows 平台可用，保存在 other 文件夹中】
2. 已在 package.json rules 中配置允许了 console 和 debugger
3. 已在 babel.config.js 中配置移除了部分 console
4. 针对考虑 谷歌SEO的，由于谷歌能执行JS，所以目测需要在 src/init.js 中的 walk 函数 解析 a 标签的时候判断是否需要添加 nofollow 等


# wx-tpl-api

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


