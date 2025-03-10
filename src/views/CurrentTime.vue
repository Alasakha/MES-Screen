<template>
        <!-- 小图表的外边框组件 -->
        <dv-border-box-1 class="box1">
        <!-- 显示当前年月日 -->
        <p class="currentTime">日期：{{ currentDate }}</p>
        <!-- 显示当前时间 -->
        <p class="currentTime">时间：{{ currentTime }}</p>

      </dv-border-box-1>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentTime = ref(''); // 用于存储当前时间
const currentDate = ref(''); // 用于存储当前日期

// 更新当前时间和日期的函数
const updateTime = () => {
  const now = new Date();
  
  // 格式化为年月日
  const dateStr = now.toLocaleDateString(); // 获取本地日期格式 (例如 "2025/3/7")
  currentDate.value = dateStr;

  // 格式化为时间
  const timeStr = now.toLocaleTimeString(); // 获取本地时间格式 (例如 "11:25:32 AM")
  currentTime.value = timeStr;
};

// 在组件挂载时启动定时器
onMounted(() => {
  updateTime(); // 初始化时设置一次时间和日期
  setInterval(updateTime, 1000); // 每秒更新一次时间和日期
});

// 在组件卸载时清除定时器
onBeforeUnmount(() => {
  clearInterval(updateTime);
});

</script>

<style>
.box1{
  height: 120px;
  width: 200px;
  display: flex;
}
.currentTime{
  font-size: 20px;
  color: aliceblue;
}
</style>