<template>
  <div class="wrapper">
    <input type="text" class="input" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event)"

    />
  </div>
</template>


<script>
  export default {
    name: 'eInput',

    props: {
      value: String,
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style lang="scss" scoped>
  /*
  --button-height: 32px;
   --font-size: 14px;
   --button-bg: white;

   --border-color: #999;
   --border-radius: 4px;
   --color: #333;

   --border-color-hover: #666;
   --button-active-bg: #eee;
   */
  $font-size: 12px;

  $height: 32px;
  $border-color: #999;
  $border-radius: 4px;
  $font-size: 12px;

  $border-color-hover: #666;
  $box-shadow-color: rgba(0, 0, 0, 0.5);

  .wrapper {
    font-size: $font-size;
    display: inline-block;

    .input {
      padding: 0 8px;
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      font-size: inherit;

      &:hover { border-color: $border-color-hover; }
      &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }

      &[disabled], &[readonly] {border-color: #bbb; color: #bbb; cursor: not-allowed;}
    }

  }


</style>
