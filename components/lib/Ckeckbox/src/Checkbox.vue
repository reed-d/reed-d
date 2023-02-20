<template>
  <label
    class="rd-checkbox"
    :class="classes"
    @click="handleChange"
    tabindex="0"
  >
    <span class="rd-checkbox-input" :class="classes"></span>
    <span class="rd-checkbox-label" :class="classes">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from "vue";

export default defineComponent({
  name: "RdCheckbox",
  props: {
    modelValue: {
      type: [Boolean, String],
      default: false,
    },
    label: {
      type: String,
    },
    size: {
      //small 或 large
      type: String,
      default: "",
    },
    iconSize: {
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    inderterminate: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    // const checkboxEmits = ["update:modelValue", "change"];

    const checkboxGroupProps = inject("checkboxGroupKey", undefined);
    //
    const isGroup = computed(() => !!checkboxGroupProps);

    const label = computed(() => props.label);

    const modelValue: any = computed({
      get() {
        return isGroup.value ? checkboxGroupProps.modelValue : props.modelValue;
      },
      set(value) {
        if (isGroup.value) {
          checkboxGroupProps.changeEvent(value);
        } else {
          ctx.emit("update:modelValue", value);
          ctx.emit("change", value);
        }
      },
    });

    const size = computed(() =>
      props.size ? props.size : checkboxGroupProps?.size
    );

    const iconSize = computed(() => {
      if (props.iconSize) {
        return props.iconSize;
      } else if (size.value === "large") {
        return "14px";
      } else if (size.value === "small") {
        return "8px";
      } else {
        return "10px";
      }
    });

    // 是否禁用
    const disabled = computed(
      () => props.disabled || checkboxGroupProps?.disabled
    );

    const iconColor = computed(() => {
      if (disabled.value) {
        if (!isGroup.value) {
          return modelValue.value ? "#c2c2c2" : "#fff";
        } else {
          return modelValue.value.indexOf(label.value) > -1
            ? "#c2c2c2"
            : "#fff";
        }
      } else {
        return "#fff";
      }
    });

    const indeterminate = computed(() => props.inderterminate);
    const border = computed(() => props.border);
    const classes = computed(() => ({
      "is-checked": isGroup.value
        ? modelValue.value.indexOf(label.value) > -1 && !indeterminate.value
        : modelValue.value && !indeterminate.value,
      [`rd-checkbox-${size.value}`]: size.value,
      "is-disabled": disabled.value,
      "is-indeterminate": indeterminate.value,
      "is-border": border.value,
    }));

    const handleChange = () => {
      if (!disabled.value) {
        if (isGroup.value) {
          const index = modelValue.value.indexOf(label.value);
          if (index > -1) {
            modelValue.value.splice(index, 1);
          } else {
            modelValue.value.push(label.value);
          }
          modelValue.value = [...modelValue.value];
        } else {
          modelValue.value = !modelValue.value;
        }
      }
    };

    return {
      modelValue,
      label,
      classes,
      size,
      iconSize,
      disabled,
      iconColor,
      isGroup,
      indeterminate,
      border,
      handleChange,
    };
  },
});
</script>

<style lang="scss">
$primary-color: #4b9e5f;

$large-size: 16px;
$default-size: 14px;
$small-size: 12px;

$large-height: 40px;
$default-height: 32px;
$small-height: 24px;

.rd-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: $default-height;

  &.is-disabled {
    cursor: not-allowed;
  }

  &.rd-checkbox-large {
    height: $large-height;
  }

  &.rd-checkbox-small {
    height: $small-height;
  }

  &:not(.is-disabled):hover .rd-checkbox-input {
    border: 1px solid #4b9e5f;
  }

  &:not(.is-disabled):focus .rd-checkbox-input {
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    border: 1px solid #4b9e5f;
  }

  &.is-border {
    border: 1px solid #c2c2c2;
    border-radius: 4px;
    padding: 0 8px;
    margin: 0 8px;

    &.is-checked:not(.is-disabled),
    &.is-indeterminate:not(.is-disabled) {
      color: $primary-color;
      border: 1px solid #18a058;
    }

    &.rd-checkbox-large {
      padding: 0 12px;
    }

    &.rd-checkbox-small {
      padding: 0 8px;
    }
  }

  > .rd-checkbox-input {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: $default-size;
    height: $default-size;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid rgb(224, 224, 230);

    &.is-checked {
      background-color: $primary-color;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
      border: 1px solid black;
      transition: all 0.3s ease-in-out;
    }

    &::before {
      // position: absolute;
      content: " ";
      width: 4px;
      height: 8px;
      transform: rotate(45deg);
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      top: 15px;
      left: 29px;
      transform-origin: center;
    }
    &.rd-checkbox-large {
      width: $large-size;
      height: $large-size;
    }

    &.rd-checkbox-small {
      width: $small-size;
      height: $small-size;
    }

    &.is-disabled {
      border: 1px solid rgb(224, 224, 230);
      box-shadow: none;
      background: #fafafc;
    }

    &.is-indeterminate {
      background-color: $primary-color;
      border: 1px solid #18a058;
      box-shadow: 0 0 0 4px rgba(24, 160, 88, 0.3);
    }
  }

  > .rd-checkbox-label {
    padding: 0 10px;
    user-select: none;
    color: rgb(39, 42, 45);
    font-size: $default-size;

    &.rd-checkbox-large {
      font-size: $large-size;
    }

    &.rd-checkbox-small {
      font-size: $small-size;
    }

    &.is-disabled {
      color: #c2c2c2ff;
    }
  }
}
</style>
