<template>
  <!-- 小图表的外边框组件 -->
  <dv-border-box-1 class="box1">
  <!-- 显示当前年月日 -->
  <p class="workprogress">今日工单进度</p>

    <div class="chart">
      <dv-scroll-ranking-board :config="config" style="width:20vw;height:35vh" />
    </div>

</dv-border-box-1>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue';



const config = reactive({
  data: [
    {
      name: '周口',
      value: 55,
    },
    {
      name: '南阳',
      value: 120,
    },
    {
      name: '西峡',
      value: 78,
    },
    {
      name: '驻马店',
      value: 66,
    },
    {
      name: '新乡',
      value: 80,
    },
    {
      name: '信阳',
      value: 45,
    },
    {
      name: '漯河',
      value: 29,
    },
  ],
  unit: '万元',
})


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