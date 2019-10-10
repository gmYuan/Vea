<template>
  <button class="ea-button" :class= "{[`icon-${iconPosition}`]: true} ">
    <e-icon :icon-name="iconType" v-if="iconType" class="icon"></e-icon>


    <div class="content">
      <slot/>
    </div>

  </button>
</template>


<script>
  export default {
    props: {
      iconType: String,
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return (value === 'left' || value === 'right')
        }
      }
    }

  }
</script>

<style scoped lang="scss">
  .ea-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;


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

    .icon {
      margin-top: 0.2em;
      margin-right: 0.3em;
    }

    &.icon-right {
      .icon {
        order: 2;
        margin-left: 0.3em;
        margin-right: 0;
      }
    }


  }




</style>
