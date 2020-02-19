<template>
  <div class="col" :class="colClasses" :style="colStyle">

    <div class="col-inner" >
      <slot></slot>
    </div>

  </div>
</template>

<script>

export default {
  name: 'eCol',
  props: {
    span: {
      type: [String, Number]
    },

    offset: [String, Number]
  },

  computed: {
    colClasses() {
      let {span, offset} = this
      return [
        span && `col-${span}`, 
        offset && `offset-${offset}`
      ]
    },

    colStyle() {
      let {gutter} = this
      return {
        paddingLeft: `${gutter/2}px`, 
        paddingRight: `${gutter/2}px`
      }
    }
  },

  data() {
    return {
      gutter: 0
    }
  },

};
</script>

<style lang="scss" scoped>
.col {
  width: 100%;
  padding: 0 10px;
 
  @for $i from 1 through 24 {
    &.col-#{$i} { width: ($i / 24) * 100%; }
  }

  @for $i from 1 through 24 {
    &.offset-#{$i} {margin-left: ($i / 24) * 100%;}
  }

  .col-inner {
    outline: 1px solid red; 
    background: yellow; 
    height: 100px;
  }

}
</style>
