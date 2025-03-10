<template>
  <div class="data-card">
    <div class="title">{{ title }}</div>
    <div class="number">{{ value }} {{ unit }}</div>
  </div>
</template>

<script setup>
defineProps({
  title: String,  // 标题
  value: [String, Number],  // 数值
  unit: { type: String, default: "" }  // 单位（可选）
});
</script>

<style scoped>
.data-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  font-size: 18px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
}

.title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
}

.number {
  font-size: 22px;
  color: #ffdd57;
}
</style>
