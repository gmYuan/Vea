<template>
  <div class="popover" ref="popover" @click="onClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>

    <div ref="triggerWrapper" style="display: inline-block;">
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
    onClick(e) {
      let triggerWrapper = this.$refs.triggerWrapper;

      if (triggerWrapper.contains(e.target)) {
        //S1 触发器部分 的点击事件
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    },

    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.setContentPosition();
        document.addEventListener("click", this.onClickDocument);
      });
    },

    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },

    onClickDocument(e) {
      let popoverPart = this.$refs.popover;

      if (e.target.contains(popoverPart)) {
        // 此时点击的是 最外层/文档空白处，需要隐藏popover
        this.close();
      }
    },

    setContentPosition() {
      let contentWrapper = this.$refs.contentWrapper;
      let triggerWrapper = this.$refs.triggerWrapper;

      document.body.appendChild(this.$refs.contentWrapper);
      let { top, left } = triggerWrapper.getBoundingClientRect();

      contentWrapper.style.left = left + window.scrollX + "px";
      contentWrapper.style.top = top + window.scrollY + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;

// S4 这样做会导致外层元素有ovfolow:hidden时， popover内容完全无法显示，因此需要用JS确定位置
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

// S4.2 作为body的子元素内容，要单独写到最外层
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  transform: translateY(-100%);

  margin-top: -10px;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>
