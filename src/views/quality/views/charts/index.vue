<template>
  <div class="charts-container">
    <BorderBox8>
        <div class="charts-content">
        <div class="charts1">
          <BorderBox10>111</BorderBox10>
        </div>
        <div class="charts2">
          <BorderBox10>222</BorderBox10>
        </div>
        <div class="charts3">
          <BorderBox10>333</BorderBox10>
        </div>
      </div>
    </BorderBox8>
  </div>
</template>

<script setup>
import { BorderBox8 } from '@dataview/datav-vue3';
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
  justify-content: space-between;
  align-items: center;
}
.charts1 .charts2 .charts3 {
  flex: 1;

}
</style>
