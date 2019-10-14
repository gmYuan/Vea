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


//单元测试部分
import chai from 'chai'
const expect = chai.expect

/* 单元测试1: 测试iconType */
{
  const btnCreater = Vue.extend(Button)
  const btn = new btnCreater({
    propsData: {
      iconType: 'settings'
    }
  })
  btn.$mount()    // 创建一个新的button组件

  // 单元测试1: 测试iconType
  const useElement = btn.$el.querySelector('use')
  const iconHref = useElement.getAttribute('xlink:href')
  expect(iconHref).to.equal('#i-settings')

  // 测试完成: 销毁组件
  btn.$el.remove()
  btn.$destroy()
}


/* 单元测试2: 测试iconPosition */
{
  const container = document.createElement('div')
  document.body.appendChild(container)

  const btnCreater = Vue.extend(Button)
  const vm = new btnCreater({
    propsData: {
      iconType: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(container)    // 创建一个新的button组件

  // 单元测试2: 测试iconPosition
  const svgEle = vm.$el.querySelector('.icon')
  const {order} = window.getComputedStyle(svgEle)
  // console.log(order)
  expect(order).to.equal('2')

  // 测试完成: 销毁组件
  vm.$el.remove()
  vm.$destroy()
  
}




