<template>
  <div>
    <rd-Button type="default" :size="size">Default button</rd-Button>
    <rd-Button type="primary" :size="size" @onClick="count++">
      Primary button
    </rd-Button>
    <rd-Button type="text" :size="size">点击了{{ count }}次</rd-Button>

    <rd-Button type="primary" :size="size" :disabled="true" @onClick="discount++">
      Disabeld button
    </rd-Button>
    <rd-Button type="text" :size="size">点击了{{ discount }}次</rd-Button>

    <rd-Button type="dashed" :size="size">dased</rd-Button>
    <rd-Button type="text" icon="/examples/assets/logo.png"></rd-Button>
    <rd-Button type="text" icon="/examples/assets/logo.png">logo</rd-Button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "btns-view",
  setup() {
    const size = ref<string | undefined>("large");
    const count = ref<number | 0>(0);
    const discount = ref<number | 0>(0);

    return {
      size,
      count,
      discount,
    };
  },
});
</script>
