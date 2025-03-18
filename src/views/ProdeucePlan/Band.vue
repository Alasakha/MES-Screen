<template>
  <ProjectSum class="title"></ProjectSum>
  <!-- 顶部导航 -->
  <dv-full-screen-container class="box">
    <dv-border-box-11 title="生产计划管理看板" :titleWidth=350 >
      <!-- 第一行 -->
      <div class="line1">
        <!-- 第一行左边框框 -->
        <div class="flex-item-left">
          <!-- 当前时间 -->
          <CurrentTime></CurrentTime>
          <!-- 基本信息 -->

            <BasicData></BasicData>

        </div>
          
        <div class="flex-item-right long-item">
          <WorkProgress></WorkProgress>
        </div>

      </div>
      
      <!-- //表格区域 -->
      <div class="picture">
        <CapacityBarchart></CapacityBarchart>
        <DailyAbnormalPiecharts></DailyAbnormalPiecharts>
        <MonthAbnormalBarchart></MonthAbnormalBarchart>
      </div>
      
    </dv-border-box-11>
  </dv-full-screen-container>
</template>

<script setup>
import CurrentTime from './CurrentTime.vue';
import ProjectSum from './ProjectSum.vue';
import WorkProgress from './WorkProgress.vue';
import BasicData from './BasicData.vue';
import CapacityBarchart from './Charts/CapacityBarchart.vue'
import DailyAbnormalPiecharts from './Charts/DailyAbnormal.vue'
import MonthAbnormalBarchart from './Charts/MonthAbnormal.vue'
</script>

<style scoped>
.line1 {
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 50vh;
}

.title {
  position: absolute;
  top: 2vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 50px;
  font-weight: bold;
}

.flex-item-left {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 42vh;
  margin: 3vh 0.5vw; /* 可选，设置组件之间的间距 */
}

.long-item {
  margin-right: 7vw;
  height: 30vh;
  width: 20vw;
  margin-top: 4vh;
}

.chart-container {
  margin-top: 20px; /* 设置图表与其他元素的间距 */
  padding: 10px;
}
.picture{
  height: 50vh;
  margin-top: 1vh;
  display: flex;
  justify-content: space-around;
}
.picture div{
  padding-left: 10px;
  padding-right: 30px;
}

</style>
