<template>
  <div class="tabs-head">
    <slot></slot>

    <div class="line" ref="line"></div>

    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "eTabsHead",

  inject: ["eventBus"],

  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      // console.log("哈哈哈:", width, left);

      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  }
};
</script>


<style scoped lang="scss">
$tab-height: 40px;
$blue: #409eff;
$border-color: #ddd;

.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;

  border-bottom: 1px solid $border-color;

  position: relative;

  .line {
    position: absolute;
    bottom: 0;
    transform: translateX(-32%);

    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }

  .actions-wrapper {
    margin-left: auto; // 向右

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style> 