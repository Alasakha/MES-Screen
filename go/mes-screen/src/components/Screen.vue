<template>
  <div class="dashboard-container">
    <!-- 顶部导航 -->
    <header class="dashboard-header">生产计划管理看板</header>
    
    <div class="dashboard-content">
      <!-- 左侧面板 -->
      <aside class="dashboard-sidebar">
        <BorderBox1>左侧数据</BorderBox1>
      </aside>
      
      <!-- 中心大屏 -->
      <main class="dashboard-main">
        <div ref="chartRef" class="chart-container"></div>
      </main>
      
      <!-- 右侧面板 -->
      <aside class="dashboard-sidebar">右侧统计</aside>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);

onMounted(() => {
  const chart = echarts.init(chartRef.value);
  chart.setOption({
    title: { text: '示例图表' },
    xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [10, 22, 28, 43, 49] }]
  });
});
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: white;
}

.dashboard-header {
  background: url(../assets/brandbac.png) center/cover no-repeat;
  text-align: center;
  padding: 1rem;
  font-size: 24px;
  color: white;
  font-family: '黑体';
  position: relative;
}

.dashboard-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* 透明黑色遮罩 */
  z-index: 1;
}

.dashboard-header span {
  position: relative;
  z-index: 2;
}

.dashboard-content {
  flex: 1;
  display: flex;
}

.dashboard-sidebar {
  width: 15%;
  padding: 1rem;
}

.dashboard-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.chart-container {
  width: 80%;
  height: 400px;
}
</style>
