<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "eTabsItem",
  inject: ["eventBus"],

  props: {
    disabled: {
      type: Boolean,
      default: false
    },

    name: {
      type: [String, Number],
      required: true
    }
  },

  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },

  data() {
    return {
      active: false
    };
  },


  created() {
    this.eventBus.$on("update:selected", name => {
      this.active = (name === this.name)
    });
  },

  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  }
};
</script>


<style lang="scss" scoped>
.tabs-item {
  height: 100%;
  flex-shrink: 0;
  padding: 0 1em;

  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid green;

 
  &.active {
    background: red;
  }
  
}
</style>