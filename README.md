# Vea

[![Build Status](https://www.travis-ci.org/gmYuan/Vea.svg?branch=master)](https://www.travis-ci.org/gmYuan/Vea)


## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架。


## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS中设置盒模型为 border-box

```css
  *, *::before, *::after{box-sizing: border-box;}
```

IE 8 及以上浏览器都支持此样式

还需设置默认颜色等变量（后续会改为 SCSS 变量）

```css
:root {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;

  --border-color: #999;
  --border-radius: 4px;
  --color: #333;

  --border-color-hover: #666;
  --button-active-bg: #eee;
}
 ```

IE 15 及以上浏览器都支持此样式

2. 安装 veagmyuan

```js
  npm i --save veagmyuan
```

3. 引入 veagmyuan

```js
import {Button, ButtonGroup, Icon} from 'veagmyuan'
import 'veagmyuan/dist/index.css'
export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

## 组件文档

1 Button组件

1. 支持一般状态、hover状态、active状态、focus状态 样式设置:  使用 CSS/SCSS变量来 统一管理

2. (1) button支持图标显示: svg的引入和使用;

    (2) slot: 父->子组件传递HTML内容; props: 父->子组件传递值

3. 图标支持左右位置设置: props的icon-position变量 + :class + flex:order属性

4. button组件的icon支持 点击显示loading状态

5. button支持按钮组组件: (1) 边框重合问题解决: 负值margin-left + :not(:first-child)

    (2) 限制按钮组slot类型: this.$el.children获取DOM元素


2 Input组件

1. 支持一般状态、hover状态、focus状态、disabled状态、、error状态  显示不同样式

2. 支持Input文本内容传入: props

3. 支持错误信息和图标 传入显示: props + v-if + :class设置样式

4. 支持 监听Input的事件: change、input、 focus、 blur: $emit()


3 网格组件

1. span跨度实现: props + :class + scss的for循环

2. offset间距实现: 同上

3. gutter实现: row设置 padding + col设置负margin + 父组件设置子组件变量值- this.$children遍历

4. 支持 简单的响应式: col组件的Props(检测) + :class设置CSS类 + @media()媒体查询


4 layout组件

1. 上中下布局: flex + flex-direction

2. 上- 左右- 下布局: this.$children + vm.$options.name + :class类名 => 有sider时更高flex-direction

3. 左- 上中下布局: 同上 + layout组件设置: flex-grow: 1


5 Toast组件

1. 基本使用方法 this.$toast('xxxx'):

  (1) Vue插件MyPlugin.install +  Vue.use;

  (2) Vue.extend全局API + vm.$solots.default实例属性 + vm.$mount()实例方法

2. 支持toast默认 5s后自动关闭: setTimeout + vm.$el.remove() + vm.$destory()

3.1 支持 toast关闭按钮的 内容文本 自定义: props- closeButton对象 + propsData + vm.closeButton

3.2 支持 toast关闭按钮点击后 执行传入的回调函数: 同上


4. 支持 toast的传入文本内容可以是富文本: props- enableHtml + v-if & slot + v-html & vm.slots.default[0]

5. 支持toast显示在页面的位置为 top/bottom/middle:  fixed定位 + :class + valiadtor()传入值检测

6. 支持toast个数覆盖显示: vm.close() + currentToast标识符

7. 支持 toast显示动画: 父子div + transform + animate



## 测试

## 提问

## 变更记录

## 联系方式

## 贡献代码