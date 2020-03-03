<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
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
        //S4.1 数值切换DOM结构时,可能无法立刻获取到DOM结构，所以需要使用nextTick来获取更新后DOM内容
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();

          this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
          this.$refs.contentWrapper.style.top = top + window.scrollY +"px";
        });

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
// S4 这样做会导致外层元素有ovfolow:hidden时， popover内容完全无法显示，因此需要用JS确定位置
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

// S4.2 作为body的子元素内容，要单独写到最外层
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
