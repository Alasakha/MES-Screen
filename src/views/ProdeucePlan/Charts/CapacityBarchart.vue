<template>
  
  <dv-border-box-9 class="box1">
    <h2>当日小时产能柱状图</h2> 
    <div class="position">
       
      <div ref="monthlyIndicators" style="width: 500px; height: 400px;"></div>
    </div>

  </dv-border-box-9>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const monthlyIndicators = ref(null);

// 绘制柱状图
const drawMonthlyIndicators = () => {
  const monthlyIndicatorsElement = echarts.init(monthlyIndicators.value);
  const option = {
    legend: {
      data: ['计划', '实际'],
      icon: 'circle', // 设置图例图标为圆形
      left: 'left', // 将图例定位到左侧
      top: 'top', // 将图例定位到顶部
    },
    grid: {
      top: '45', // 距离容器上边界的距离
      right: '10', // 距离容器右边界的距离
      bottom: '3', // 距离容器下边界的距离
      left: '10', // 距离容器左边界的距离
      containLabel: true, // 包含标签的绘图区域
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        show: false, // 不显示横坐标轴线
      },
      axisTick: {
        show: false, // 不显示刻度线
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
    },
    series: [
      {
        name: '实际',
        data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 234, 123],
        type: 'bar',
        stack: 'total', // 添加堆积效果
        barWidth: '30%', // 调整柱子宽度
        itemStyle: {
          borderRadius: [5, 5, 0, 0], // 只有顶部圆角
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            // 设置渐变色
            { offset: 0, color: '#bdd1f6' },
            { offset: 1, color: '#4282ff' },
          ]),
        },
      },
      {
        name: '计划',
        data: [320, 132, 101, 134, 90, 230, 210, 320, 132, 101, 134, 90],
        type: 'bar',
        stack: 'total', // 添加堆积效果
        barWidth: '30%', // 调整柱子宽度
        itemStyle: {
          borderRadius: [5, 5, 0, 0], // 只有顶部圆角
          color: '#ebf2ff', // 设置柱子颜色
        },
      },
    ],
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
  height: 26vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: aliceblue;
}

h2 {
  position: absolute;
  top: 10px;
  left: 20px;
  margin: 0;
}

.position {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.position div {
  width: 90%; /* 适当调整宽度 */
  height: 90%; /* 适当调整高度 */
}

</style>
