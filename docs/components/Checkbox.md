# Checkbox 多选框

在一群将要选择的选项中进行多选

## 使用方式

```js
import rdCheckbox from 'Reed-d'
import rdCheckboxGroup from 'Reed-d'
Vue.use(rdCheckbox)
Vue.use(rdCheckboxGroup)
```

## 实例
::: demo
```vue
<template>
    <div style="width: 100%">
    <rd-checkbox label="选项C" />
    <rd-checkbox label="选项D" />
  </div>
  <div style="width: 100%">
    <rd-checkbox label="选项A" size="large" />
    <rd-checkbox label="选项B" size="large" />
  </div>
  <div style="width: 100%">
    <rd-checkbox label="选项E" size="small" />
    <rd-checkbox label="选项F" size="small" />
  </div>
  <div style="width: 100%">
    <rd-checkbox label="选项G" size="small" disabled />
    <rd-checkbox label="选项H" size="small" disabled />
  </div>
  <div style="width: 100%">
    <rd-checkbox label="选项I" border />
    <rd-checkbox label="选项G" border />
  </div>
</template>
```
:::
## 禁用状态隐藏代码

选项A选项B
::: demo
```vue
<template>
  <div>
    <rd-checkbox
      label="选项B"
      size="large"
      disabled=true
    />
  </div>
</template>

```
:::

## 多选框组

::: demo
```vue
<template>
  <rd-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    label="全选"
  />
  <rd-checkbox-group
    @change="handleCheckedmenberChange"
    v-model="checkedmenber"
    size="large"
  >
    <rd-checkbox v-for="menber in Gmenbers" :key="menber" :label="menber" />
  </rd-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const checkAll = ref(false);
const isIndeterminate = ref(true);

const checkedmenber = ref(["组员一"]);
const Gmenbers = ["组员一", "组员二", "组员三", "组员四"];

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? [...Gmenbers] : [];
  isIndeterminate.value = false;
};

const handleCheckedmenberChange = (value: string[]) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === Gmenbers.length;
  isIndeterminate.value = checkedCount > 0 && Gmenbers.length > checkedCount;
};
</script>
```
:::

## 使用
### API
### Checkbox 属性

| 属性               | 说明                           | 类型              | 可选值                 | 默认值 |
| :----------------- | :----------------------------- | :---------------- | :--------------------- | :----- |
| v-model/modelValue | 选中项绑定的值                 | string  / boolean | -                      | -      |
| label              | 单选框对应的值                 | string  / boolean | -                      | -      |
| disabled           | 是否禁用单选框                 | boolean           | true/false             | false  |
| border             | 是否显示边框                   | boolean           | true/false             | false  |
| size               | Checkbox 的尺寸                | string            | large / default /small | -      |
| indeterminate      | 设置不确定状态，仅负责样式控制 | `boolean`         | true/false             | false  |

### Checkbox 事件

| 事件名 | 说明                   |
| :----- | :--------------------- |
| change | 绑定值变化时触发的事件 |

### Checkbox-group 属性

| 属性               | 说明         | 类型    | 可选值                 | 默认值 |
| :----------------- | :----------- | :------ | :--------------------- | :----- |
| v-model/modelValue | 绑定值       | array   | -                      | []     |
| disabled           | 是否禁用     | boolean | -                      | false  |
| border             | 是否显示边框 | boolean | -                      | false  |
| size               | 多选框组尺寸 | string  | large / default /small | -      |

### Checkbox-group 事件

| 事件名 | 说明                     |
| :----- | :----------------------- |
| change | 当绑定值变化时触发的事件 |
