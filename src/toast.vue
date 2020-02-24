<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>

      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>

    <div @click="onClickClose"  class="close">
      <span  v-if="closeButton">
        {{closeButton.text}}
      </span>
    </div>
    
   
  </div>
</template>

<script>

export default {
  name: "eToast",

  props: {
    // S2.1 是否自动关闭toast
    autoClose: {
      type: Boolean,
      default: false
    },

    // S2.2 自动关闭toast的延时时间
    autoCloseDelay: {
      type: Number,
      default: 5
    },

    //S3 关闭按钮 文本内容 + 回调函数
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },

    //S4 传入文本内容是否是 富文本
    enableHtml: {
      type: Boolean,
      default: false
    }

  },
 
  
  mounted () {
    this.updateStyles()
    this.execAutoClose()
  },

  methods: {
    updateStyles () {
      this.$nextTick(() => {
        this.$refs.line.style.height =`${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },

    execAutoClose() {  // 自动关闭toast
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },

    close() {
      this.$el.remove()
      this.$destroy()
    },

    onClickClose() {
      this.close()

      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()   
      }
    }
   

  },


};

</script>

<style lang="scss" scoped>

$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;

  position: fixed; 
  top: 10%; 
  left: 50%; 
  transform: translateX(-50%); 
  display: flex;
  align-items: center;


  color: white;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
  padding: 0 16px;

}

.message {
  padding: 6px 0;
}

.line {
  height: 100%;
  border-left: 1px solid #999;
  margin: 0 8px;
}

.close {
  flex-shrink: 0;
  cursor:pointer;

}


</style>
