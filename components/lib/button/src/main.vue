<template>
  <button @click="emit('click')" :class="styleClasses">
    <slot name="icon-left"></slot>
    <span class="loading">
     <span v-if="loading" class="iconfont icon-jiazai_dan"></span>
    </span>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import {typeType,sizeType,shapeType} from './types/index';
export default defineComponent({
  name: "rdButton",
  props: {
    type:{
      type: String as PropType<typeType>,
      default: 'default'
    },
    shape:{
      type: String as PropType<shapeType>,
      default: 'default'
    },
    size: {
      type: String as PropType<sizeType>,
      default: 'middle'
    },
    danger: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    block: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup(props,{emit}){
      const load:boolean = props.loading;
      const styleClasses = computed(() => {
        return {
          'rd-button': true,
          [`rd-button--${props.type}`]: props.type,
          'danger': props.danger,
          [`shape-${props.shape}`]: props.shape,
          [`size-${props.size}`]: props.size,
          'block': props.block,
          'disable':props.disabled
        }
      })
      return {
        styleClasses,
        emit,
        load
      }
  }
});
</script>

<style lang="scss">
@import './assets/css/iconfont.css';
$primary:#1890FF;
$primary_hover:#42a0f7fe;
$default: rgb(175, 172, 172);
$danger:red;
$danger_hover:rgb(244, 114, 114);
.rd-button{
  text-align:center;
  font-size: 14px;
  box-sizing: border-box;
  span{
    margin:0;
    padding:0;
  }
}
  .size-small{
    padding:3px 5px;
    font-size: 14px;
  }
  .size-middle{
    padding:10px 20px;
    font-size: 16px
  }
  .size-large{
    padding:15px 30px;
    font-size:18px;
  }
  .block{
    width:100%;
  }
  .rd-button--primary{
  color:white;
  background-color: $primary;
  border:1px solid $primary;
  &:hover{
    background-color:$primary_hover;
    border: 1px solid $primary_hover;
  }
 }
 .rd-button--default,.rd-button--dashed{
  background-color: white;
  color: $default;
  border:1px solid $default;
  &:hover{
    border-color: $primary;
    color:$primary
  }
 }
 .rd-button--dashed{
  border-style: dashed;
 }
 .rd-button--text{
  background-color: white;
   border: none;
   color:$default
 }
 .rd-button--link{
   background-color: white;
    border:none;
    color:$primary;
 }
 .rd-button--primary.danger{
  color:white;
  background-color: $danger;
  border:1px solid $danger;
  &:hover{
    background-color:$danger_hover;
    border: 1px solid $danger_hover;
  }
 }
 .rd-button--default.danger{
   background-color: white;
  color: $danger;
  border:1px solid $danger;
 }
 .rd-button--dashed.danger{
  border-style: dashed;
  color: $danger;
  border:1px dashed $danger;
 }
 .rd-button--text.danger{
  color:$danger;
 }
 .rd-button--link.danger{
  color: $danger;
 }
 .shape-round{
  border-radius: 10px;
 }
 .shape-circle{
  border-radius: 100%;
 }
 .size-small.shape-circle{
  padding: 5px;
  font-size:14px;
 }
 .size-middle.shape-circle{
  padding: 10px;
  font-size:16px;
 }
 .size-large.shape-circle{
  padding:15px;
  font-size:18px;
 }
 .shape-default{
  border-radius: 1px;
 }
.disable{
  border: 1px solid #D9D9D9;
  color:#D9D9D9;
  background-color: #F5F5F5;
  &:hover{
    cursor: no-drop;
    border: 1px solid #D9D9D9;
    color:#D9D9D9;
    background-color: #F5F5F5;
  }
}
.loading{
  display: inline-block;
  
  animation-name: loading;
  animation-duration: 1.6s;
  animation-delay: 0ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  .icon-jiazai_dan{
    font-size: 18px;
  }
}
@keyframes loading{
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

</style>
