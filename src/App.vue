<script setup>
import { onMounted, onUnmounted } from 'vue'
import index from './views/index.vue'
import { screenAdapter } from './utils/screen'

// 组件挂载时初始化屏幕适配
onMounted(() => {
  screenAdapter()
})

// 组件卸载时移除事件监听
onUnmounted(() => {
  window.removeEventListener('resize', screenAdapter)
})
</script>

<template>
  <index></index>
</template>
  
<style>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  width: 1920px;
  height: 1080px;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
    url('./assets/background.jpg') no-repeat center center;
  background-size: cover;
  transform-origin: left top;
}

/* 全局样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
