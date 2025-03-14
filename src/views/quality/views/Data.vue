<template>
<BorderBox10>
  <div class="box1">
    <div class="cards-container">
      <DataCard title="今日检验树" :value="passedInfo.checkTotal" />
      <DataCard title="今日合格数" :value="passedInfo.passTotal" />
      <DataCard title="今日合格率" :value="passedInfo.passPercent" />
    </div>
  </div>
</BorderBox10>
</template>

<script setup>
import { BorderBox10 } from '@dataview/datav-vue3';
import DataCard from '@/components/DataCard.vue';
import { getPaassedInfo } from '@/api/getQuiltyinfo';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';


const passedInfo = ref({})
const route = useRoute();
const prodLine = route.query.prodLine; // 通过 query 获取参数

const fetchData = () => {
  getPaassedInfo(prodLine).then(res => {
    passedInfo.value = res.data
  })
}

onMounted(() => {
  fetchData();
})
</script>

<style scoped>
.box1 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
}

.cards-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  max-width: 90%;
}
</style>
