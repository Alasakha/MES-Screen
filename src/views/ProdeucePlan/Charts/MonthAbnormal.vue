<template>
  <dv-border-box-9 class="box1">
    <div class="wrapper">
      <h2>本月生产异常饼图</h2>
      
      <!-- 如果正在加载，显示 loading -->
      <div v-if="isLoading" class="loading-container">
        <dv-loading>Loading...</dv-loading>
      </div>
      
      <!-- 如果没有数据，显示暂无数据 -->
      <div v-if="!isLoading && isDataEmpty" class="empty-container">
        暂无数据
      </div>
      
      <!-- 数据加载完成且非空时显示图表 -->
        <div v-if="!isLoading && !isDataEmpty" ref="monthlyIndicators"  style=""></div>

      
    </div>
  </dv-border-box-9>
</template>

<script setup>
import { ref, onMounted ,nextTick} from 'vue';
import * as echarts from 'echarts';
import { getabnormalProductionMonthInfo } from '@/api/getProduceinfo';
import { useRoute } from 'vue-router';
import { formatPieChartData } from '@/utils/Data/map';

const route = useRoute();
const prodLine = route.query.prodLine; // 通过 query 获取参数
const monthlyIndicators = ref(null);

// Loading 和 数据为空的状态
const isLoading = ref(true);
const isDataEmpty = ref(false);

const drawMonthlyIndicators = (formattedData) => {
  const monthlyIndicatorsElement = echarts.init(monthlyIndicators.value);
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

  monthlyIndicatorsElement.setOption(option);
};

const processData = (data) => {
  console.log("原始数据:", data);
  const formattedData = formatPieChartData(data, 'guZhangTypeName', 'guZhangTypeCount');
  console.log("格式化后的数据:", formattedData);

  if (formattedData.length === 0) {
    console.log("数据为空，设置 isDataEmpty 为 true");
    isDataEmpty.value = true;  // 如果没有数据，设置为空数据状态
  } else {
    console.log("数据不为空，绘制图表");
    isDataEmpty.value = false;
    console.log(isDataEmpty.value);
    
    // 确保 DOM 更新后再执行 ECharts 初始化
    nextTick(() => {
      console.log("DOM 更新完成，开始绘制图表");
      drawMonthlyIndicators(formattedData);
    });
  }
};

// 在组件挂载时绘制图表
onMounted(() => {
  getabnormalProductionMonthInfo(prodLine)
    .then(res => {
      isLoading.value = false;   // 加载完成，关闭 loading 状态
      processData(res.data);  // 处理数据
      console.log(isDataEmpty.value);
    })
    .catch(() => {
      isLoading.value = false;
      isDataEmpty.value = true;  // 如果请求失败，设置为空数据状态
    });
});
</script>

<style scoped>
.box1 {
  position: relative;
  width: 30vw;
  height: 24vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: aliceblue;
  padding: 20px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrapper div {
  width: 90%;
  height: 90%;
}

/* 加载中的样式 */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
}

/* 数据为空的提示样式 */
.empty-container {
  color: #fff;
  font-size: 16px;
  text-align: center;
}


</style>
