
import Toast from '../toast'

const MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  
  // 添加实例方法
  Vue.prototype.$toast = function (message) {
    let Constructor = Vue.extend(Toast)  // 生成 创建组件子类实例 的构造器
    let toast = new Constructor()
    toast.$slots.default = [message]
    console.log('toast', toast)
    toast.$mount()
    document.body.appendChild(toast.$el)
  }
}


export default MyPlugin

