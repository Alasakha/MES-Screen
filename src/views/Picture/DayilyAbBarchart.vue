<template>
  <dv-border-box-9 class="box1">
    <div class="wrapper">
      <h2>本月生产异常饼图</h2>
      <div ref="monthlyIndicators"></div>
    </div>
  </dv-border-box-9>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const monthlyIndicators = ref(null);

const drawMonthlyIndicators = () => {
  const monthlyIndicatorsElement = echarts.init(monthlyIndicators.value);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
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
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  monthlyIndicatorsElement.setOption(option);
};

// 在组件挂载时绘制图表
onMounted(() => {
  drawMonthlyIndicators();
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
  width: 90%;
  height: 90%;
}
</style>
