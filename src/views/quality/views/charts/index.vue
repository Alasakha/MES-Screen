<template>
  <div class="charts-container">
    <BorderBox8>
        <div class="charts-content">
        <div class="charts1">
          <BorderBox10><MonthChart></MonthChart></BorderBox10>
        </div>
        <div class="charts2">
          <BorderBox10><MonthResponsityTop></MonthResponsityTop></BorderBox10>
        </div>
        <div class="charts3">
          <BorderBox10><TodayChart></TodayChart></BorderBox10>
        </div>
        <div class="charts4">
          <BorderBox10><TodayResponsityTop/></BorderBox10>
        </div>
        
      </div>
    </BorderBox8>
  </div>
</template>

<script setup>
import { BorderBox8 ,BorderBox10} from '@dataview/datav-vue3';
import MonthChart from './MonthTop.vue';
import MonthResponsityTop from './MonthResponsityTop.vue';
import TodayChart from './TodayTop.vue';
import TodayResponsityTop from './TodayResponsityTop.vue';
</script>

<style scoped>
.charts-container {
  width: 100%;
  height: 55%;

}
.charts-content {
  display: flex;
  gap: 20px;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.charts1, .charts2, .charts3,.charts4 {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>
