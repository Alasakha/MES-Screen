<template>

  <div class="box1"> 
        <h1>今日TOP5</h1>
        <dv-scroll-ranking-board :config="config" style="width:90%;height:100%" />
  </div>
  </template>
  
  
  <script setup>
  import { ref, reactive } from 'vue';
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: start;
    color:aliceblue;

  }
  h1{
    font-size: 30px;
    color:aliceblue;
    letter-spacing: 5px;
  }
</style>