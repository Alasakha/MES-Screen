<template>
  <ProjectSum class="title"></ProjectSum>
  <!-- 顶部导航 -->
  <dv-full-screen-container class="box">
    <dv-border-box-11 title="生产计划管理看板">
      <!-- 第一行 -->
      <div class="line1">
        <!-- 第一行左边框框 -->
        <div class="flex-item-left">
          <!-- 当前时间 -->
          <CurrentTime></CurrentTime>
          <!-- 基本信息 -->
          <div class="basicdata">
            <BasicData></BasicData>
          </div>
        </div>
          
        <div class="flex-item-right long-item">
          <WorkProgress></WorkProgress>
        </div>

      </div>
      
      <!-- //表格区域 -->
      <div class="picture">
        <CapacityBarchart></CapacityBarchart>
        <ProduceAbnormalPiecharts></ProduceAbnormalPiecharts>
        <DayilyAbBarchart></DayilyAbBarchart>
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
import ProduceAbnormalPiecharts from './Charts/ProduceAbnormalPiecharts.vue'
import DayilyAbBarchart from './Charts/DayilyAbBarchart.vue'


</script>

<style scoped>
.line1 {
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 50vh;
}

.flex-item-left, .flex-item-right {
  height: 20vh;
  margin: 5vh 10px; /* 可选，设置组件之间的间距 */
}

.title {
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
}

.flex-item-left {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 50vh;
  margin: 5vh 10px;
}

.long-item {
  margin-right: 15vw;
  height: 30vh;
  width: 20vw;
}

.chart-container {
  margin-top: 20px; /* 设置图表与其他元素的间距 */
  padding: 10px;
}
.picture{
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
</style>
