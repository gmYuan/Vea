<template>
  <div class="popover" ref="popover" @click="onClick">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      v-if="visible"
      :class="[`position-${position}`]"
    >
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

  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      }
    }
  },

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
      let { contentWrapper, triggerWrapper } = this.$refs;
      let { top, left, width, height } = triggerWrapper.getBoundingClientRect();
      document.body.appendChild(contentWrapper);

      if (this.position === "top") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        contentWrapper.style.left = left + window.scrollX + "px";
        contentWrapper.style.top = top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        contentWrapper.style.left = left - 2 * width + window.scrollX + "px";
        let { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top =
          top + window.scrollY + (height - height2) / 2 + "px";
      } else if (this.position === "right") {
        contentWrapper.style.left = left + width + window.scrollX + "px";
        let { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top =
          top + window.scrollY + (height - height2) / 2 + "px";
      }
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

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    margin-left: -11px;
    &::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: black;
    }
    &::after {
      left: calc(100% - 1px);
      top: 50%;
      transform: translateY(-50%);
      border-left-color: white;
    }
  }

  &.position-right {
    margin-left: 11px;
     &::before {
      left: -20px;
      top: 50%;
      transform: translate(0%, -50%);
      border-right-color: black;
    }
    &::after {
      left: calc(-18px - 1px);
      top: 50%;
      transform: translateY(-50%);
      border-right-color: white;
    }
  }
}
</style>
