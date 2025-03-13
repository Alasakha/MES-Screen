<script setup>
import { onMounted, onUnmounted } from 'vue'
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
  <div class="screen-container">
    <router-view></router-view>
  </div>
</template>
  
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.screen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
    url('./assets/background.jpg') no-repeat center center;
  background-size: cover;
  transform-origin: center center;
  position: relative;
  transition: transform 0.3s ease;
}

/* 全局样式 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
