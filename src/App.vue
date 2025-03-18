<script setup>
import { onMounted, onUnmounted } from 'vue'
import { screenAdapter } from './utils/screen'
import { eventBus } from './utils/Data/eventBus'

let intervalId = null;
let removeScreenListener = null; // 用于存储 screenAdapter 返回的清理函数

onMounted(() => {
  // 初始化屏幕适配，并获取返回的清理函数
  removeScreenListener = screenAdapter();

  // 每 3 分钟触发一次全局刷新事件
  intervalId = setInterval(() => {
    console.log("触发全局更新事件");
    eventBus.emit("refreshData");
  }, 180000);
})

onUnmounted(() => {
  // 调用 screenAdapter 返回的清理函数，正确移除监听
  if (removeScreenListener) {
    removeScreenListener();
  }
  clearInterval(intervalId);
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
