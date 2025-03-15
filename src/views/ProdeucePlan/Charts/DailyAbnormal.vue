<template>
  <dv-border-box-9 class="box1">
    <div class="wrapper">
      <h2>当日生产异常饼图</h2>
      
      <!-- 如果正在加载，显示 loading -->
      <div v-if="isLoading" class="loading-container">
        <dv-loading>Loading...</dv-loading>
      </div>
      
      <!-- 如果没有数据，显示暂无数据 -->
      <div v-if="!isLoading && isDataEmpty" class="empty-container">
        暂无数据  
      </div>
      
      <!-- 数据加载完成且非空时显示图表 -->
       
      <div  v-if="!isLoading && !isDataEmpty" ref="dailyIndicators" class="charts"></div>
    </div>
  </dv-border-box-9>
</template>
<script setup>
import { ref, onMounted,onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import { getabnormalProductionDaliyInfo } from '@/api/getProduceinfo';
import { useRoute } from 'vue-router';
import { formatPieChartData } from '@/utils/Data/map';
import { eventBus } from '@/utils/Data/eventBus';

const route = useRoute();
const prodLine = route.query.prodLine; // 通过 query 获取参数
const dailyIndicators = ref(null);
// Loading 和 数据为空的状态
const isLoading = ref(true);
const isDataEmpty = ref(false);

const drawDailytIndicators = () => {
  const dailyIndicatorsElement = echarts.init(dailyIndicators.value);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
            color: '#fff' // 设置图例字体颜色为白色
        }
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: formattedData // 使用传递过来的数据
      }
    ]
  };

  dailyIndicatorsElement.setOption(option);
};
const processData = (data) => {
  const formattedData = formatPieChartData(data, 'guZhangTypeName', 'guZhangTypeCount');
  if (formattedData.length === 0) {
    isDataEmpty.value = true;  // 如果没有数据，设置为空数据状态
  } else {
    isDataEmpty.value = false;
    drawDailytIndicators(formattedData); // 数据存在时绘制图表
    nextTick(() => {
      console.log("DOM 更新完成，开始绘制图表");
      drawDailytIndicators(formattedData);
    });
  }
};

const fetchData = () => {
  getabnormalProductionDaliyInfo(prodLine)
    .then(res => {
      isLoading.value = false;   // 加载完成，关闭 loading 状态
      processData(res.data);  // 处理数据
      console.log(isDataEmpty.value);
    })
    .catch(() => {
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
.box1 {
  position: relative; /* 让子元素可以相对这个容器定位 */
  width: 30vw;
  height: 24vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: aliceblue;
  padding: 20px; /* 给内容留点边距 */
}

h2 {
  position: absolute;
  top: 10px;
  left: 15px;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* 让 h2 和图表上下排列 */
  align-items: center;
  justify-content: center; /* 居中饼图 */
}

.wrapper div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-container,
.empty-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 40px;
}

</style>
