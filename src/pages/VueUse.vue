<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3 class="title">Mouse: {{ x }} x {{ y }}</h3>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';

export default defineComponent({
  name: 'VueUse',
  setup() {
    const { x, y } = useMouse();

    return {
      x,
      y,
    };
  },
});
</script>

<style lang="less" scoped>
.title {
  background-color: #788089;
}
</style>


