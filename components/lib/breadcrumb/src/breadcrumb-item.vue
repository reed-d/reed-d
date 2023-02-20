<template>
  <span class="rd-breadcrumb-item">
    <span :class="[`rd-breadcrumb-item-inner`,{'islink': to.path}]" ref="link">
      <slot></slot>
    </span>
    <!-- <rd-icon v-if="separatorIcon" class="rd-breadcrumb-separator" :size="12">
      <component :is="separatorIcon"></component>
    </rd-icon> -->
    <span class="rd-breadcrumb-separator">{{ separator }}</span>
  </span>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  ref,
} from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RdBreadcrumbItem",
  props: {
    // to,为路由跳转对象
    to: {
      type: Object,
      // default: () => ({}),
    },
    // replace：来操控是否开启覆盖,默认为FALSE
    //push： 追加历史记录，即在前一条的记录上在新加一条浏览记录
    //replace： 覆盖历史记录，即在添加新记录的同时回收原有记录，替换掉原有记录
    replace: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // 把link变成一个响应式的
    const link = ref(null);
    // 接收父组件传来的props
    const parent = inject("RdBreadCrumbProps", undefined);

    const instance = getCurrentInstance();
    // 获取vue-router实例
    const router = instance.appContext.config.globalProperties.$router;

    // const isexist:boolean = props.to.path

    // const islink = computed(() => {
    //   return {
    //     [`islink`]: isexist
    //   }
    // })

    onMounted(() => {
      // 路由跳转
      // 组件(第一次)挂载完后执行
      link.value.addEventListener("click", () => {
        if (!props.to || !router) return;
        props.replace ? router.replace(props.to) : router.push(props.to);
      });
    });

    return {
      link,
      separator: parent?.separator,
      separatorIcon: parent?.separatorIcon,
      // islink
    };
  },
});
</script>

<style scoped lang="scss">
.rd-breadcrumb-item {
  display: flex;
  float: left;
  align-items: center;
  color: #3f4043 !important;

  .rd-breadcrumb-separator {
    margin: 0 10px;
    font-weight: bold;
    color: #c0c4cc;
  }

  .rd-breadcrumb-item-inner {
    font-weight: 700;
    text-decoration: none;
    color: #303133;
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    a {
      color: #303133;
    }

    &.islink {
      &:hover {
        color: #be4e35a7;
        cursor: pointer;
      }
    }
  }

  &:last-child .rd-breadcrumb-separator {
    display: none;
  }
}
</style>
