# Select 下拉框

## 使用方法
```js
import rdSelect from 'Reed-d';
Vue.use(rdSelect);
```
## 实例
### 基本
::: demo

```vue
<template>
  <rd-select
      id="select"
      style="width: 200px"
      :options="options"
      v-model="value"></rd-select>
</template>
<script setup lang='ts'>
import {ref} from 'vue'
const value = ref("1");
const options =  [
  {
    label: "时间会回答成长",
    value: "1",
  },
  {
    label: "成长会回答梦想",
    value: "2",
  },
  {
    label: "梦想会回答生活",
    value: "3",
  },
  {
    label: "生活回答你我的模样",
    value: "4",
  },
  {
    label: "海洋会回答江湖",
    value: "5",
  },
  {
    label: "江湖会回答河流",
    value: "6",
  },
  {
    label: "河流会回答浪潮",
    value: "7",
  },
  {
    label: "一起跃入人海",
    value: "8",
  },
  {
    label: "做一朵奔涌的浪花",
    value: "9",
  },
  {
    label: "。。。",
    value: "10",
  },
];
</script>
```
:::
### 禁用状态
::: demo 禁用状态
```vue
<template>
  <rd-select
    id="select"
    style="width: 200px"
    :options="options"
    v-model="value"
    disabled
  />
</template>

<script setup lang="ts">
import {ref} from 'vue';
const value = ref("1");
const options = [
  {
    label: "时间会回答成长",
    value: "1",
    disabled: true,
  },
  {
    label: "成长会回答梦想",
    value: "2",
  },
  {
    label: "梦想会回答生活",
    value: "3",
    disabled: true,
  },
  {
    label: "生活回答你我的模样",
    value: "4",
  },
  {
    label: "海洋会回答江湖",
    value: "5",
    disabled: true,
  },
  {
    label: "江湖会回答河流",
    value: "6",
  },
  {
    label: "河流会回答浪潮",
    value: "7",
    disabled: true,
  },
  {
    label: "一起跃入人海",
    value: "8",
  },
  {
    label: "做一朵奔涌的浪花",
    value: "9",
  },
  {
    label: "。。。",
    value: "10",
  },
];
</script>
```
:::

### 多选
::: demo
```vue
<template>
  <rd-select
    id="select"
    style="width: 400px"
    :options="options"
    v-model="value"
    multiple
    placeholder="Please Choose"
    clearable
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(["song0", "song3", "song4"]);
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: "song0",
    disabled: true,
  },
  {
    label: "Drive My Car",
    value: "song1",
  },
  {
    label: "Norwegian Wood",
    value: "song2",
  },
  {
    label: "You Won't See",
    value: "song3",
    disabled: true,
  },
  {
    label: "Nowhere Man",
    value: "song4",
  },
  {
    label: "Think For Yourself",
    value: "song5",
  },
  {
    label: "The Word",
    value: "song6",
  },
  {
    label: "Michelle",
    value: "song7",
    disabled: true,
  },
  {
    label: "What goes on",
    value: "song8",
  },
  {
    label: "Girl",
    value: "song9",
  },
  {
    label: "I'm looking through you",
    value: "song10",
  },
  {
    label: "In My Life",
    value: "song11",
  },
  {
    label: "Wait",
    value: "song12",
  },
];
</script>
```
:::

### 远程搜索
::: demo
```vue
<template>
  <rd-select
    id="select"
    style="width: 400px"
    placeholder="Please Choose"
    remote
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

</script>
```
:::

## API
### Select
| 参数          | 说明     | 类型                        | 默认值   |
|-------------|--------|---------------------------|-------|
| v-model     | 绑定值    | boolean / string / number | -     |
| placeholder | 占位符    | string                    | 请选择   |
| clearable   | 可清除选项  | boolean                   | false | 
| disabled    | 是否禁用   | boolean                   | false |
| options     | 配置选项内容 | Array                     | []    |
| multiple   | 是否多选   | boolean                   | false |

### 事件
| 事件名称        | 说明     | 回调参数 |
|-------------|--------|------|
| change     | 选中值发生变化时触发    | 选中的值 |
| clear | 在点击由 clearable 属性生成的清空按钮时触发    | -    | 