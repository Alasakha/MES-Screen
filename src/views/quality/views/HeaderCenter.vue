<template>
  <div class="container">
    <div class="title title-main">阿波罗质量管理看板</div>
    <div class="title">合格率目标：{{ cumulativePassRate.passTotal  }}</div>
    <div class="title">本月累计合格率：{{ cumulativePassRate.passPercent }}</div>
  </div>
</template>

<script setup>  
import { ref, onMounted } from 'vue';
import { getcumulativePassRate } from '@/api/getQuiltyinfo';
import { useRoute } from 'vue-router';

const route = useRoute();
const prodLine = route.query.prodLine; // 通过 query 获取参数

const cumulativePassRate = ref({})

const fetchData = () => {
  getcumulativePassRate(prodLine).then(res => {
    cumulativePassRate.value = res.data
  })
}

onMounted(() => {
  fetchData();
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 纵向排列 */  
  align-items: center; /* 默认左对齐，你也可以选择 center 来居中对齐 */
  justify-content: center; /* 垂直居中 */
  margin-left: 15vw;
}

.title {
  margin-bottom: 10px; /* 控制行与行之间的间距 */
  font-size: 20px;
  color: white;
}

.title-main {
  font-size: 50px; /* 设置标题行的字体更大 */
  font-weight: bold; /* 设置标题为加粗 */
  letter-spacing: 10px; /* 增加字间距 */
}
</style>