<template>
  <!-- 小图表的外边框组件 -->
  <dv-border-box-1 class="box1">
  <!-- 显示当前年月日 -->
  <p class="workprogress">今日工单进度</p>

    <div class="chart">
      <dv-scroll-ranking-board :config="config" style="width:20vw;height:35vh" :waitTime="5000" />
    </div>

</dv-border-box-1>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';
import { getTodayOrderProgressInfo } from '@/api/getProduceinfo';
import { useRoute } from 'vue-router';
import { formatPieChartData } from '@/utils/Data/map';
import { eventBus } from '@/utils/Data/eventBus';
const route = useRoute();
const prodLine = route.query.prodLine;
// Loading 和 数据为空的状态
const isLoading = ref(true);
const isDataEmpty = ref(false);

const config = reactive({
  data:[],
  unit: '万元',
})

const processData = (data) => {

const formattedData = formatPieChartData(data, 'gd', 'total');
console.log(formattedData);
if (formattedData.length === 0) {

  isDataEmpty.value = true;  // 如果没有数据，设置为空数据状态
} else {

  isDataEmpty.value = false;
  config.data = formattedData;  // 这里赋值给 config.data
}
};

const fetchData = () => {
  getTodayOrderProgressInfo(prodLine).then(res => {
    isLoading.value = false;   // 加载完成，关闭 loading 状态
    processData(res.data);
  }).catch(() => {
      isLoading.value = false;
      isDataEmpty.value = true;  // 如果请求失败，设置为空数据状态
    });
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
.box1{
height: 45vh;
width: 25vw;
display: flex;
}
.workprogress{
font-size: 25px;
color: aliceblue;
margin-top: 2vh;
margin-bottom: 0;
}
.chart{
  margin-left: 2vw;
}
</style>