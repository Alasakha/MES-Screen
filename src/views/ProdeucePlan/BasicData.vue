<template>
  <dv-border-box-1 class="box1">
      <div class="production-data">
        <div class="row">
          <DataCard title="人时效率" :value="11" unit="%" />
          <DataCard title="本月已完成数" :value="MonthlyData?.done || '无数据'" /> 
          <DataCard title="本月待生产数" :value="MonthlyData?.incomplete || '无数据'" />
          
        </div>
        <div class="row" >
          <DataCard title="今日总排产" :value="TodayData?.pcTotal || '无数据'" /> 
          <DataCard title="今日生产中" :value="TodayData?.inProduce || '无数据'" />
          <DataCard title="今日待生产" :value="TodayData?.unProduce || '无数据'" />
          <DataCard title="今日产量达成率" :value="TodayData?.rate || '无数据'" />
        </div>
      </div>
  </dv-border-box-1>
</template>


<script setup>
import { ref, onMounted,onBeforeUnmount } from 'vue';
import DataCard from "@/components/DataCard.vue"; // 导入封装组件
import { getMonthTotalInfo ,getTodayProductionInfo} from '@/api/getProduceinfo';
import { useRoute } from 'vue-router';
import { eventBus } from '@/utils/Data/eventBus';
// 定义数据
const MonthlyData = ref()
const TodayData = ref()
const route = useRoute();
const prodLine = route.query.prodLine; // 通过 query 获取参数

const fetchData = () => {
  getMonthTotalInfo(prodLine).then(res => {
    console.log(res.data);
    MonthlyData.value = res.data
  }),
  getTodayProductionInfo(prodLine).then(res => {
    console.log(res.data);
    TodayData.value = res.data
  })
}

// 在组件挂载时启动定时获取数据
onMounted(() => {
  fetchData(); // 组件挂载时先请求一次
  eventBus.on("refreshData", fetchData); // 监听全局刷新事件
});


  // 清理定时器，避免组件卸载后定时器继续执行
  onBeforeUnmount(() => {
    eventBus.off("refreshData", fetchData); // 组件销毁时取消监听
  });
</script>

<style scoped>
.box1 {
  width: 70vw;
  height: 45vh;
  display: flex;
  flex-wrap: wrap;
  color: aliceblue;
  margin-top: 1vh;
}




.production-data {
  margin-top: 0.5vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 让子元素（两行）在父容器内均匀分布 */
  height: 100%; /* 关键：确保有高度，子元素才能占据空间 */
}

.row {
  display: flex;
  justify-content: space-around;
  flex: 1; /* 关键：让两行平均占满父容器 */
  align-items: center; /* 可选：让 DataCard 组件在行内垂直居中 */
}


</style>