<template>

  <div class="tabs-pane">
    <slot></slot>

    <slot name="actions"></slot>

  </div>
</template>

<script>
  export default {
    name: 'eTabsPane',
    inject: ['eventBus'],

    created () {
      this.eventBus.$on('update:selected', (name) => {
        console.log('当前pane是', name)
      })
    }



  }
</script>


<style>
  
</style> 