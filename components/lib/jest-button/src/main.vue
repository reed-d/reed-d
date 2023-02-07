<template>
  <button :class="classes" @click="handleClick">
    <img v-if="iconUrl" :src="iconUrl" />
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "rdButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["onClick"],
  setup(props, { emit }) {
    const btnType = ref<string | undefined>(props.type);
    const iconUrl = ref<string | undefined>(props.icon);
    const btnDisabled = ref<boolean | false>(props.disabled);

    const classes = computed(() => {
      let disabledvalue:string = btnDisabled.value ? '-disabled': '';
      return {
        [`btn-base`]: true,
        [`type-${btnType.value}${disabledvalue}`]: btnType,
      };
    });

    const handleClick = (event: Event) => {
      if (props.disabled) {
        event.preventDefault();
        return;
      }
      emit("onClick", event);
    };

    return {
      iconUrl,
      classes,
      handleClick,
    };
  },
});
</script>

<style lang="less" scoped>
.btn-base {
  margin: 10px;
  border-width: 0;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.type-default {
  background-color: #ffffff;
  color: #808080;
  border: 1px solid #808080;
}
.type-default-disabled {
  background-color: #ffffff;
  color: #999999;
  border: 1px solid #999999;
}
.type-primary {
  background-color: #4169e1;
  color: #ffffff;
}
.type-primary-disabled {
  background-color: #999999;
  color: #ffffff;
}
.type-dashed {
  background-color: #ffffff;
  color: #808080;
  border: 1px dashed #808080;
}
.type-text {
  color: #4169e1;
}
.size_large {
  height: 2em;
}
.size_small {
  height: 0.7em;
}
img {
  margin: 0;
}
</style>
