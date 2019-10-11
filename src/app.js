import Vue from 'vue'
import Button from './button'
import Icon from './icon'

import ButtonGroup from './button-group'

Vue.component('e-button', Button)
Vue.component('e-icon', Icon)
Vue.component('e-button-group', ButtonGroup)

new Vue({
  el: '#app',
})
