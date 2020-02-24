import Vue from 'vue'

/* button组件 */
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

/* input组件 */
import Input from './input'

/* 网格组件 */
import Row from './row'
import Col from './col'

/* layout布局组件 */
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'


/* toast组件 */
import Toast from './toast'
import MyPlugin from './common/plugin' 
Vue.use(MyPlugin)




Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)

Vue.component('e-input', Input)

Vue.component('e-row', Row)
Vue.component('e-col', Col)

Vue.component('e-layout', Layout)
Vue.component('e-header', Header)
Vue.component('e-content', Content)
Vue.component('e-footer', Footer)
Vue.component('e-sider', Sider)

Vue.component('e-toast', Toast)


new Vue({
  el: '#app',

  methods: {  
    // Input组件的change事件
    inputChange(e) {
      console.log('新值是', e.target.value)
    },

    // toast组件触发事件
    showToast() {
      this.$toast('我是toast', {
        closeButton: {
          text: '知道了',
          callback() { alert('执行了关闭回调') }       
        },
        enableHtml: false,

        position: 'middle'

      })
    }


  }

})



