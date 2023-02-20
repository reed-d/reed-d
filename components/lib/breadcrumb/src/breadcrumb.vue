<template>
  <div ref="breadcrumb" class="rd-breadcrumb">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, ref } from "vue";

export default defineComponent({
  name: "RdBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/",
    },
    separatorIcon: {
      type: Object,
    },
  },
  setup(props) {
    const breadcrumb = ref(null);
    // 给子组件提供separators和separatorsIcon
    provide("RdBreadCrumbProps", props);

    return {
      breadcrumb,
    };
  },
});
</script>

<style lang="scss">
.rd-breadcrumb {
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 1;
}
</style>
