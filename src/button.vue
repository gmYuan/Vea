<template>
  <button class="ea-button" :class= "{[`icon-${iconPosition}`]: true} ">
    <svg class="icon" aria-hidden="true" v-if="iconType">
      <use :xlink:href=`#i-${iconType}`></use>
    </svg>

    <div>
      <slot></slot>
    </div>

  </button>
</template>


<script>
  export default {
    props: {
      iconType: String,
      iconPosition: String
    }

  }
</script>

<style scoped lang="scss">
  .ea-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    background: var(--button-bg);

    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);


    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }


  }


  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
