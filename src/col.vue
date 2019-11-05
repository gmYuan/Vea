<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'eCol',
  props: {
    span: {
      type: [String, Number]
    },
  }

};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  outline: 1px solid red;
  background: gray;

  @for $i from 1 through 24 {
    &.col-#{$i} { width: ($i / 24) * 100%; }
  }
}
</style>
