<template>
  <div
    v-if="remote"
    class="rd-select"
    :class="{
      'is-disabled': disabled,
      'is-visible': !remote,
    }"
  >
    <input
      type="text"
      class="rd-base-select"
      v-model="inputValue"
      @input="handleInput"
    />
    <div class="rd-select-dropdown">
      <div class="no-options" v-show="options1.length === 0">无选项</div>
      <span
        class="rd-select-option"
        :class="{
          'is-active': multiple
            ? modelValue.includes(item.value)
            : modelValue === item.value,
          'is-multiple': multiple,
        }"
        v-for="item in options1"
        :key="item.value"
        @click="handleOptionClick(item)"
      >
        <jw-ellipsis>{{ item.label }}</jw-ellipsis>
        <jw-icon
          :size="18"
          class="rd-select-option-suffix-icon"
          v-if="multiple && modelValue.includes(item.value)"
        >
          <Check />
        </jw-icon>
      </span>
    </div>
  </div>
  <div
    v-else
    class="rd-select"
    :tabindex="disabled ? '' : -1"
    ref="selectRef"
    :class="{
      'is-disabled': disabled,
      'is-visible': !remote,
    }"
  >
    <div
      v-show="!multiple"
      class="rd-base-select"
      :tabindex="disabled ? '' : -1"
    >
      <div v-show="modelLabel" class="rd-select-label">{{ modelLabel }}</div>
      <div v-show="!modelLabel" class="rd-select-placeholder">
        {{ placeholder }}
      </div>
      <jw-icon
        :size="18"
        class="rd-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
        color="rgba(194, 194, 194, 1)"
      >
        <CloseCircleOutline
          v-if="closeVisible && modelLabel"
          @click="handleClear"
        />
        <IosArrowDown v-else />
      </jw-icon>
    </div>
    <div class="rd-base-select rd-select-tags" v-if="multiple">
      <jw-tag
        closeable
        v-for="(item, index) in modelLabel"
        :key="index"
        @close="handleClear(item)"
        >{{ item }}
      </jw-tag>
      <div v-show="modelLabel.length === 0" class="rd-select-placeholder">
        {{ placeholder }}
      </div>
      <jw-icon
        :size="18"
        class="rd-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
        color="rgba(194, 194, 194, 1)"
      >
        <CloseCircleOutline
          v-if="closeVisible && modelLabel"
          @click="handleClear"
        />
        <IosArrowDown v-else />
      </jw-icon>
    </div>
    <div class="rd-select-dropdown">
      <div class="no-options" v-show="options.length === 0">无选项</div>
      <span
        class="rd-select-option"
        :class="{
          'is-active': multiple
            ? modelValue.includes(item.value)
            : modelValue === item.value,
          'is-disabled': item.disabled,
          'is-multiple': multiple,
        }"
        v-for="item in options"
        :key="item.value"
        @click="handleOptionClick(item)"
      >
        <jw-ellipsis>{{ item.label }}</jw-ellipsis>
        <jw-icon
          :size="18"
          class="rd-select-option-suffix-icon"
          v-if="multiple && modelValue.includes(item.value)"
        >
          <Check />
        </jw-icon>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from "vue";
import { IosArrowDown } from "@vicons/ionicons4";
import { CloseCircleOutline } from "@vicons/ionicons5";
import { Check } from "@vicons/tabler";
import { selectProps, selectEmits, useSelect } from "./index";
import JwEllipsis from "../dep/ellipsis.vue";
import JwIcon from "../dep/icon.vue";
import JwTag from "../dep/tag.vue";

const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

interface ListItem {
  value: string;
  label: string;
}
const inputValue = ref();
const handleInput1 = () => {
  if (inputValue.value) {
    let query = inputValue.value;
    setTimeout(() => {
      options1.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options1.value = [];
  }
};
const handleInput = debounce(handleInput1, 500);

const list = ref<ListItem[]>([]);
const options1 = ref<ListItem[]>([]);
const selectRef = ref();
onMounted(() => {
  console.log(options);
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` };
  });
});

//func 是事件处理程序，delay 是事件执行的延迟时间，单位：毫秒
function debounce(func, delay) {
  var timer = null;
  return function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var that = this;
    var args = arguments;
    //每次触发事件 都把定时器清掉重新计时
    clearTimeout(timer);
    timer = setTimeout(function () {
      //执行事件处理程序
      func.call(that, args);
    }, delay);
  };
}

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
const {
  options,
  modelValue,
  modelLabel,
  disabled,
  placeholder,
  clearable,
  closeVisible,
  multiple,
  remote,
} = useSelect(props, emits);

const handleOptionClick = (item) => {
  if (!item.disabled) {
    if (multiple.value) {
      const isRemove = modelValue.value.includes(item.value);
      isRemove
        ? modelValue.value.splice(modelValue.value.indexOf(item.value), 1)
        : modelValue.value.push(item.value);
      emits("update:modelValue", modelValue.value);
      emits("change", modelValue.value);
    } else if (!multiple.value && !remote) {
      selectRef.value.blur();
      emits("update:modelValue", item.value);
      emits("change", item.value);
    } else {
      emits("update:modelValue", item.value);
      emits("change", item.value);
      console.log(item);
      inputValue.value = item.label;
    }
  }
};

const handleClear = (e) => {
  if (!multiple.value) {
    emits("update:modelValue", "");
    emits("clear", "");
  }
  if (multiple.value) {
    const value = options.value.find((v) => v.label === e)?.value;
    if (modelValue.value.indexOf(value) > -1) {
      modelValue.value.splice(modelValue.value.indexOf(value), 1);
    } else {
      modelValue.value.splice(0, modelValue.value.length);
    }
    emits("update:modelValue", modelValue.value);
    emits("clear", modelValue.value);
  }
};
</script>

<script lang="ts">
export default {
  name: "RdSelect",
};
</script>
<style lang="scss">
.rd-select {
  width: 100%;
  position: relative;
  cursor: pointer;

  .rd-select-placeholder {
    color: rgba(194, 194, 194, 1);
  }

  .rd-select-label,
  .rd-select-placeholder {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .rd-base-select {
    width: 100%;
    line-height: 34px;
    min-height: 34px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    outline: none;
    padding: 0 30px 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;

    &:hover {
      border-color: #c0c4cc;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: #18a058;
      box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
    }

    .rd-select-suffix {
      position: absolute;
      right: 5px;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .rd-select-dropdown {
    z-index: 10000;
    position: absolute;
    border-radius: 3px;
    padding: 0;
    top: calc(100% + 5px);
    width: 100%;
    opacity: 0;
    height: 0px;
    width: 100%;
    pointer-events: none;
    background-color: #fff;
    transition: all 250ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;

    .no-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .rd-select-option {
      z-index: 10000;
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      overflow: visible;
      background-color: #fff;
      position: relative;

      .rd-select-option-suffix-icon {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        width: 30px;
        right: 0;
        top: 0;
      }

      &:hover,
      &.is-active {
        background-color: #f3f3f5;
        color: #25a561;
      }

      &.is-disabled {
        cursor: not-allowed;
        background-color: #fff;
        color: #c2cddd;
      }

      &.is-disabled.is-active {
        background-color: #f9f9fa;
        color: #a5ceaf;
      }

      &.is-multiple {
        padding-right: 0px;
      }
    }
  }

  &:hover .rd-select-dropdown {
    pointer-events: auto;
  }
  &:focus-within .rd-select-dropdown {
    opacity: 1;
    height: 300px;
    width: 100%;
    pointer-events: auto;
  }

  &:focus-within .rd-base-select {
    outline: none;
    border-color: #18a058;
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.3);
  }

  &.is-disabled {
    cursor: not-allowed;
  }
  &.is-disabled .rd-base-select {
    cursor: not-allowed;
    background-color: #fafafc;
    color: rgba(194, 194, 194, 1);

    &:hover,
    &:focus,
    &:active {
      border: 1px solid #dcdfe6;
      box-shadow: none;
    }
  }
}
</style>
