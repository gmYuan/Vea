import Vue from 'vue'

/* button组件 */
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

/* input组件 */
import Input from './input'


Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)

Vue.component('e-input', Input)



new Vue({
  el: '#app',
  
  methods: {
    inputChange(e) {
      console.log('新值是', e.target.value)
    }
  }
  
})



