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

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码