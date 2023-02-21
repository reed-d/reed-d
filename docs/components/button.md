# Button 按钮
按钮用于开始一个即时操作。
## 使用方式
```js
import rdTab from 'Reed-d';
Vue.use(rdTab);
```
## 何时使用 
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

- 在 Reed-d中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。

- 默认按钮：用于没有主次之分的一组行动点。

- 虚线按钮：常用于添加操作。

- 文本按钮：用于最次级的行动点。

- 链接按钮：一般用于链接，即导航至某位置。

  以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 示例

### 按钮类型
按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
::: demo
```vue
<template>
    <rd-button type="primary">提交</rd-button>
    <rd-button>提交</rd-button>
    <rd-button type="dashed">提交</rd-button>
    <rd-button type="text">text</rd-button>
    <rd-button type="link">link</rd-button>
</template>
<style>
    .rd-button{
      margin:10px;
    }
</style>
```
:::

### 不可用状态
::: demo
```vue
<template>
    <rd-button disabled>
      发送(disabled)
    </rd-button>
    <rd-button type="text" disabled>
      text(disabled)
    </rd-button>
    <rd-button type="link" disabled>
      link(disabled)
    </rd-button>
</template>
<style lang="scss">
    .rd-button{
      margin:10px;
    }
</style>
```
:::

### 加载中状态
添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
::: demo
```vue
<template>
     <rd-button type="primary" loading>
      加载中...
    </rd-button>
    <rd-button type="primary" loading size="middle" shape='circle'></rd-button>
</template>
<style lang="scss">
    .rd-button{
      margin:10px;
    }
</style>
```
:::

### 图标按钮
当需要在 Button 内嵌入 Icon 时，可以直接在 Button 内使用 Icon 组件，或者使用icon-left、icon-right插槽。
::: demo

```vue
<template>
     <rd-button type="primary" size="middle" shape="circle">
      <span class="iconfont icon-sousuo-xianxing"></span>
    </rd-button>
    <rd-button shape="round">
      <template #icon-left>
        <span class="iconfont icon-sousuo-xianxing"></span>
      </template>
      搜索
    </rd-button>
</template>
<style lang="scss">
    .rd-button{
      margin:10px;
    }
</style>
```
:::

### 按钮尺寸
按钮有大、中、小三种尺寸。
通过设置 size 为 large ,small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
::: demo

```vue
<template>
    <rd-button type="primary" size="large" shape="round">确定</rd-button>
    <rd-button type="primary" shape="round">确定</rd-button>
    <rd-button type="primary" size="small" shape="round">确定</rd-button>
    <br/>
     <rd-button type="dashed" size="large" shape="round">确定</rd-button>
    <rd-button type="dashed" shape="round">确定</rd-button>
    <rd-button type="dashed" size="small" shape="round">确定</rd-button>
    <br/>
     <rd-button size="large" shape="round">确定</rd-button>
    <rd-button shape="round">确定</rd-button>
    <rd-button size="small" shape="round">确定</rd-button>
</template>
<style lang="scss">
    .rd-button{
      margin:10px;
    }
</style>
```
:::

### block按钮
block 属性将使按钮适合其父宽度。
::: demo

```vue
<template>
     <rd-button block>
        <template #icon-left>
            <span class="iconfont icon-sousuo-xianxing"></span>
         </template>
        搜索
      </rd-button>
      <br/>
      <rd-button block type="dashed" shape="round">提交</rd-button>
      <br/>
      <rd-button block type="primary">确定</rd-button>
</template>
<style lang="scss">
    .rd-button{
      margin:10px;
    }
</style>
```
:::

## API
### Button
| 参数      | 说明                                                  | 类型                                 | 默认值  |
| --------- | ----------------------------------------------------- | ------------------------------------ | ------- |
| block     | 将按钮宽度调整为其父宽度的选项                        | boolean                              | false   |
| type      | 设置按钮的类型                                        | primary\|dashed\|link\|text\|default | default |
| shape     | 设置按钮形状                                          | round\|circle\|default               | default |
| size      | 设置按钮大小                                          | large\|middle\|small                 | middle  |
| loading   | 设置加载状态                                          | boolean                              | false   |
| disable   | 设置禁用状态                                          | boolean                              | false   |
| iconLeft  | 设置左侧图标                                          | v-slot                               | -       |
| iconRight | 设置右侧图标                                          | v-slot                               | -       |
| danger    | 设置危险按钮                                          | boolean                              | false   |
| href      | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string                               | -       |
| target    | 相当于 a 链接的 target 属性，href 存在时生效          | string                               | -       |
### 事件

| 事件名称 | 说明             | 回调函数         |
| -------- | ---------------- | ---------------- |
| click    | 点击按钮时的回调 | （event）=> void |


