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


Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)

Vue.component('e-input', Input)


Vue.component('e-row', Row)
Vue.component('e-col', Col)


new Vue({
  el: '#app',

  methods: {
    inputChange(e) {
      console.log('新值是', e.target.value)
    }
  }

})



