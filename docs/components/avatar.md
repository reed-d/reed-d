# Avatar 头像
用来代表用户或事物，支持图片、图标或字符展示。
## 使用方法
```javascript
import rdAvatar from 'Reed-d';
Vue.use(rdAvatar);
```
## 实例
### 基本
头像有三种尺寸，两种形状可选
::: tip
```html
<template>
    <rd-avatar size="small"  imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
    <rd-avatar size="default"  imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
    <rd-avatar size="large"  imgSrc="http://8.142.19.67:3000/images/cat2.jpg"/>
    <br/>
    <rd-avatar size="small"  shape="square"  imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
    <rd-avatar size="default"  shape="square"  imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
    <rd-avatar size="large"  shape="square"  imgSrc="http://8.142.19.67:3000/images/cat2.jpg"/>
</template>
<style lang="scss">
.avatar{
  margin-left:15px !important;
}
</style>
```
:::
### 类型
支持两种类型：图片和字符(包括字体图标)，其中字符型可以自定义图标颜色及背景色。
::: tip
```html
<template>
    <rd-avatar size="small" bg="green">Tom</rd-avatar>
    <rd-avatar bg="pink">Alen</rd-avatar>
    <rd-avatar bg="blue" size="large">Jack</rd-avatar>
</template>
<style lang="scss">
.avatar{
  margin-left:15px !important;
}
</style>
```
:::
### 阴影和边距
可以为边框添加阴影效果，以及设置内边距
::: tip
```html
<template>
    <rd-avatar size="large" shade :padding="3"  imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
    <rd-avatar size="large"  shape="square" shade :padding="3" 		      imgSrc="http://8.142.19.67:3000/images/cat1.jpg"/>
</template>
<style lang="scss">
.avatar{
  margin-left:15px !important;
}
</style>
```
:::

## API
### Avatar
| 参数      | 说明                                                         | 类型                                | 默认值   |
| --------- | ------------------------------------------------------------ | ----------------------------------- | -------- |
| alt       | 图像无法显示时的替代文本                                     | string                              | 加载失败 |
| size      | 设置头像大小                                                 | 'small'\|‘default’\|'large'\|number | default  |
| shape     | 设置头像的形状                                               | 'circle'\|'square'                  | circle   |
| imgSrc    | 图片类图像的资源地址                                         | string                              | -        |
| padding   | 头像内容距离边框的单位像素                                   | number                              | 0        |
| shade     | 图像是否有边框阴影                                           | boolean                             | false    |
| bg        | 设置头像的背景颜色                                           | string                              | white    |
| loadError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | ( ) => boolean                      | -        |
