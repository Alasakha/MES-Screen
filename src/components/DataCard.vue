<template>
  <div class="data-card">
    <div class="title">{{ title }}</div>
    <!-- <div class="number">{{ value }} {{ unit }}</div> -->
    <div small-bg>
    <dv-decoration-9 style="width:100px;height: 100px">
      <div color-green font-600 class="content" bg="~ dark/0">
        {{value}}{{ unit }}
      </div>
    </dv-decoration-9>
  </div>
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
  font-size: 1vw;
  padding: 2vw 2vw 2vw 1vw;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
}

.title {
  font-size: 1.5vw;
  font-weight: bold;
  margin-bottom: 5px;
}

.number {
  font-size: 22px;
  color: #ffdd57;
}
.content{
    font-size: 28px;
    text-shadow: 0 0 3px #7acaec;
    color: aqua;
  }
</style>
