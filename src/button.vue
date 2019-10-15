<template>
  <button class="e-button" :class= "{[`icon-${iconPosition}`]: true} " @click="changeIcon">

    <e-icon :icon-name="iconType" v-if="iconType && !showLoading" class="icon"></e-icon>
    <!-- 加载图标   -->
    <e-icon icon-name="loading" class="icon loading" v-if="showLoading"></e-icon>


    <div class="content">
      <slot/>
    </div>

  </button>
</template>


<script>
  import Vue from 'vue'
  import Icon from './icon'
  Vue.component('e-icon', Icon)


  export default {
    props: {
      iconType: String,

      iconPosition: {  // 图标位置，只支持左/右
        type: String,
        default: 'left',
        validator: function (value) {
          return (value === 'left' || value === 'right')
        }
      },

      hasLoading: {    // 是否显示按钮laoding效果，默认显示
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        showLoading: false,   // 按钮点击后显示的加载图标，默认不展示
      }
    },

    methods: {
      changeIcon() {
        if (this.hasLoading) {    // 只有需要显示loading动效时，才会对默认隐藏的loading图标进行切换显示
          // console.log('1', this.hasLoading)
          this.showLoading = !this.showLoading
        }
      }
    },

  }
</script>

<style scoped lang="scss">
  .e-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    background: var(--button-bg);

    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    /* 图标部分 */
    .icon {
      margin-top: 0.2em;
      margin-right: 0.3em;
    }

    &.icon-right {
      .icon {
        order: 2;
        margin-left: 0.3em;
        margin-right: 0;
      }
    }

    /* loading部分 */
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .loading {
      animation: spin 2s infinite linear;
    }


  }




</style>
