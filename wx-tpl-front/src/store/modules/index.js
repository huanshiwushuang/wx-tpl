const modulesFiles = require.context('.', true, /[^index]\.js$/)

// webpack 读取当前目录下的所有除了 index.js 的模块，将导出合并为一个
const sum = modulesFiles.keys().reduce((sum, modulePath) => {
  const value = modulesFiles(modulePath)
  const { state, mutations, actions } = value.default

  Object.assign(sum.state, state)
  Object.assign(sum.mutations, mutations)
  Object.assign(sum.actions, actions)

  return sum
}, {
  state: {},
  mutations: {},
  actions: {}
})

export default sum