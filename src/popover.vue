<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ePopover",

  data() {
    return {
      visible: false
    };
  },

  methods: {

    xxx() {
      this.visible = !this.visible;

      if (this.visible) {

        let eventHandler = () => {
          this.visible = false;
          console.log("document 隐藏 popover");
          // S2 为了避免每次点击popover部分会重复创建多个监听器，所以要手动销毁之前创建的 监听器
          document.removeEventListener("click", eventHandler);
        };

        // S1监听了文档的点击事件，因为点击了popover部分后 默认会冒泡到文档点击，从而自动执行隐藏操作
        // 所以，需要让popover的点击事件阻止冒泡
        document.addEventListener("click", eventHandler); 

      } else {
        // S3 因为点击popover内容部分，就会默认冒泡触发隐藏事件， 所以也需要避免冒泡
        console.log("vm 隐藏 popover");
      }
    }


  }
};
</script>

<style lang="scss" scoped>

// S4 这样做会导致外层元素有ovfolow:hidden时， popover内容完全无法显示，因此方案不正确
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
