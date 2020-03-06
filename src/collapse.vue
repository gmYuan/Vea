<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>

import Vue from 'vue'
export default {
  name: "eCollapse",

  props: {
    selected: Array,
    single: Boolean
      
  },

  data() {
    return {
      eventBus: new Vue(),

    }
  },

  provide() {
    return {
      eventBus: this.eventBus,
      single: this.single
    }
    
  },

  mounted() {
    this.showDefault()
    this.onClickItem()
  },

  methods: {

    showDefault() {
      this.eventBus.$emit('showDefault', this.selected)
    },


    onClickItem() {

      this.eventBus.$on('clickItem', (curValue, status) => {
        
        console.log('father', curValue, status)
        let selected = JSON.parse(JSON.stringify(this.selected))  

        if (status) {  // 显示状态，selected绑定值应该 增加
          selected.push(curValue)
          selected = [...new Set(selected)]
         
          this.$emit('update:selected', selected)

        } else {  // 隐藏状态，去除selected的值
          let index = selected.indexOf(curValue)
          selected.splice(index, 1)
          
          this.$emit('update:selected', selected)

        }
      })
    },

  },



};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;

.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
