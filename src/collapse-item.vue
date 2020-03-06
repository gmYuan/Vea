<template>
  <div class="collapseItem">
    <div class="title" @click="onClick">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "eCollapseItem",
  
  inject: ['eventBus', 'single'],

  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      open: false
    };
  },

  mounted() {
    this.showDefault() 
     
  },

  methods: {
    showDefault() {
      this.eventBus.$on('showDefault', (value) => {
        if (value.includes(this.name)) {
          this.open = true
        }
      })
    },

    onClick() {
      if (this.single) {
        
      }
      this.open = !this.open
      this.eventBus.$emit('clickItem', this.name, this.open)
    },

  },

 


};
</script>



<style lang="scss" scoped>

$grey: #ddd;
$border-radius: 4px;

.collapseItem {
  .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .title:last-child {
     border-bottom: none;
    }
  }
  .content {
    padding: 8px;
  }
}
</style>
