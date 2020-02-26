<template>

  <div class="tabs-pane">
    <slot></slot>

    <slot name="actions"></slot>

  </div>
</template>

<script>
  export default {
    name: 'eTabsPane'
  }
</script>


<style>
  
</style> 