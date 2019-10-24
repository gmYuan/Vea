const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })

  it('可以传值value.', () => {
    const Constructor  = Vue.extend(Input)
    const vm = new Constructor ({
      propsData: {
        value: '我是测试value'
      }
    })
    vm.$mount()    // 创建一个新的组件

    const inputEle = vm.$el.querySelector('.input')
    expect(inputEle.value).to.equal('我是测试value')
    vm.$destroy()
  })
  
  
  it('可以传值disabled.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        disabled: true,
      }
    })
    vm.$mount()

    const inputEle = vm.$el.querySelector('.input')
    expect(inputEle.disabled).to.eq(true)

    vm.$el.remove()
    vm.$destroy()
  })
  
  
  it('可以传值readonly.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        readonly: false,
      }
    })
    vm.$mount()
    
    const inputEle = vm.$el.querySelector('.input')
    expect(inputEle.readOnly).to.eq(false)                 // 注意要是驼峰，不然会是undefined!!!
    
    vm.$el.remove()
    vm.$destroy()
  })
  
  
  // it('点击 button 触发 click 事件', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       iconType: 'settings',
  //     }
  //   })
  //   vm.$mount()
  //
  //   const callback = sinon.fake()
  //   // vm.$on('click', callback)
  //   vm.$el.addEventListener("click", callback)
  //   vm.$el.click()
  //
  //   expect(callback).to.have.been.called
  //
  // })
  //
})
