<template>
  <dv-border-box-1 class="box1">
    <div class="content">
      <div class="production-data">
        <div class="row">
          <DataCard title="人时效率" :value="efficiency" unit="%" />
          <DataCard title="本月已完成数" :value="completedThisMonth" />
          <DataCard title="本月待生产数" :value="pendingThisMonth" />
          <DataCard title="今日总排产" :value="totalPlannedToday" />
        </div>
        <div class="row">
          <DataCard title="进入已生产" :value="completedThisMonth" />
          <DataCard title="今日待生产" :value="pendingThisMonth" />
          <DataCard title="今日产量达成率" :value="totalPlannedToday" />
        </div>
      </div>
    </div>
  </dv-border-box-1>
</template>


<script setup>
import { ref, onMounted } from 'vue';

import DataCard from "@/components/DataCard.vue"; // 导入封装组件

// 定义数据
const peopleCount = ref(50);  // 人数
const efficiency = ref(85);   // 效率（%）
const completedThisMonth = ref(1200);
const pendingThisMonth = ref(300);
const totalPlannedToday = ref(150);
const inProduction = ref(90);
const pendingToday = ref(60);
const completionRate = ref(95);  // 产量达成率（%）
onMounted(() => {
  // 模拟数据更新（可接后端接口）
  setTimeout(() => {
    peopleCount.value = 55;
    efficiency.value = 88;
  }, 2000);
});
</script>


<style scoped>
.box1 {
  width: 70vw;
  height: 20vw;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  color: aliceblue;
}

.content {
  display: flex;
  justify-content: space-between;
  margin-top: 4vh; 

}

.humaneffic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  font-size: 20px;
}

.number {
  margin-top: 5px;
  font-size: 16px;
  color: #ffdd57;
}

.production-data {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  font-size: 30px;
  padding: 10px 0; /* 上下增加一些 padding */
}

.row {
  display: flex;
  justify-content: space-around; /* 让内容分散一点 */
  /* gap: 30px; 增大间距 */
  margin-bottom: 50px; /* 让两行之间间隔更大 */
}

.title{
  font-size: 30px;
}
</style>