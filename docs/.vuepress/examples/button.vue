<template>
  <button :class="'btn2 ' + type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "gButton",
  props: {
    btnType: {
      type: String,
      default: "default",
    },
  },
  setup(props) {
    const type = ref<string | undefined>(props.btnType);
    return {
      type,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn2 {
  margin: 10px;
  border-width: 0;
  border-radius: 15px;
  padding: 10px 20px;
  color: white;
  &:hover {
    color: antiquewhite;
  }
}
.success {
  background-color: green;
}
.default {
  background-color: blue;
}
.warning {
  background-color: orange;
}
</style>
