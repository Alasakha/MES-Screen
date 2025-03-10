<template>
  <div class="container">
    <div class="title title-main">生产计划管理看板</div>
    <div class="title">本月生产计划总数：{{ ProjectSum }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

const ProjectSum = ref(2123);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 纵向排列 */
  align-items: center; /* 默认左对齐，你也可以选择 center 来居中对齐 */
  justify-content: center; /* 垂直居中 */
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