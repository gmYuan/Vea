<template>
  <div>
    <e-button> 欢迎使用vea </e-button>

  </div>
</template>

<script>
  import {Button, ButtonGroup, Icon} from 'veagmyuan'
  import 'veagmyuan/dist/index.css'


  export default {
    name: 'home',
    components: {
      'e-button': Button
    }
  }
</script>


<style>
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

</style>
