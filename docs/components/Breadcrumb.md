# Breadcrumb 面包屑

## 使用方式

```js
import rdBreadcrumb from 'Reed-d'
import rdBreadcrumbItem from 'Reed-d'
Vue.use(rdBreadcrumb)
Vue.use(rdBreadcrumbItem)
```

## 实例
### 常规用法
::: demo
```vue
<template>
	<rd-breadcrumb separator="/">
    <rd-breadcrumb-item :to="{ path: '/1' }">Home</rd-breadcrumb-item>
    <rd-breadcrumb-item>test1</rd-breadcrumb-item>
    <rd-breadcrumb-item :to="{ path: '/2' }">test2</rd-breadcrumb-item>
    <rd-breadcrumb-item :to="{ path: '/3' }">test3</rd-breadcrumb-item>
  </rd-breadcrumb>
</template>
```
:::

### 使用
## API

### Breadcrumb 属性

| 属性      | 说明   | 类型   | 可选 | 默认  |
| --------- | ------ | ------ | ---- | ----- |
| separator | 分隔符 | string | ---  | ' / ' |

### BreadcrumbItem 属性

| 属性    | 说明                                   | 类型    | 可选       | 默认  |
| ------- | -------------------------------------- | ------- | ---------- | ----- |
| to      | 路由跳转的目的地                       | object  | ---        | 无    |
| replace | 是否使用replace,使用后导航不会留下记录 | boolean | true/false | false |

