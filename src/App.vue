<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import { screenAdapter } from './utils/screen'
import { eventBus } from './utils/Data/eventBus'

let intervalId = null;
let removeScreenListener = null; // 存储 `screenAdapter` 返回的清理函数

onMounted(async () => {
  await nextTick(); // 确保 `#app` 已经挂载
  removeScreenListener = screenAdapter(); // 启动适配监听

  // 避免 `intervalId` 被多次创建
  if (!intervalId) {
    intervalId = setInterval(() => {
      console.log("🔄 触发全局更新事件");
      eventBus.emit("refreshData");
    }, 180000);
  }
});

onUnmounted(() => {
  // 移除 `resize` 监听
  if (removeScreenListener) {
    removeScreenListener();
  }

  // 清除定时器
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
</script>

<template>
  <div class="screen-container">
    <router-view></router-view>
  </div>
</template>

<style>
/* 全屏基础样式 */
html, body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 屏幕居中适配 */
.screen-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* 缩放适配 */
#app {
  width: 100vw;
  height: 100vh;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
    url('./assets/background.jpg') no-repeat center center;
  background-size: cover;
  transform-origin: center center;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
