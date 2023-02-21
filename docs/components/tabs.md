
# Select 下拉选择框

## 使用方式



```javascript
import rdTab from 'Reed-d';
Vue.use(rdTab);
```

## 示例
### 常规用法
::: tip
```html
<template>
  <rdTab :items="defaultitem"></rdTab>
</template>
<script setup lang='ts'>
const defaultitem = [
  {
    key: "1",
    title: "Tab 1",
    context: "context of Tab 1",
    closed: false,
    disabled: false,
  },
  {
    key: "2",
    title: "Tab 2",
    context: "context of Tab 2",
    closed: false,
    disabled: true,
  },
  {
    key: "3",
    title: "Tab 3",
    context: "context of Tab 3",
    closed: false,
    disabled: false,
  }
];
</script>
```
:::

## 基础用法

基础的按钮用法。



### 使用
## API

### Tabs

| 参数      | 说明                 | 类型        | 可选值                   | 默认值 |
| --------- | -------------------- | ----------- | ------------------------ | ------ |
| activeKey | 当前激活tab面板的key | Int         | -                        | 1      |
| type      | 标签展示类型         | string      | line \| card             | line   |
| size      | 选项卡大小           | string      | large \| middle \| small | middle |
| centered  | 选项卡是否居中       | boolean     | -                        | false  |
| items     | 选项卡展示内容       | TabItemType | -                        | []     |

### TabItemType

| 参数     | 说明                  | 类型    | 默认值 |
| -------- | --------------------- | ------- | ------ |
| key      | 对应activeKey         | string  | -      |
| title    | 选项卡头显示文字      | string  | -      |
| url      | 选项卡头显示icon的url | string  | -      |
| children | 选项卡头显示内容      | string  | -      |
| disabled | 是否禁用              | boolean | -      |