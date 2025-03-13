<template>
  <dv-full-screen-container>
    <BorderBox11 title="质量管理看板">
      <div class="box">
        <BorderBox12>
          <div class="box-content">
            <!-- 左侧部分：包含时间、标题和数据展示 -->
            <div class="left-content">
              <!-- 上方时间和标题 -->
              <div class="top-row">
                <div class="time-section">
                  <CurrentTime></CurrentTime>
                </div>
                <div class="title-section">
                  <HeaderCenter></HeaderCenter>
                </div>
              </div>
              <!-- 下方数据展示 -->
              <div class="data-section">
                <Data></Data>
              </div>
            </div>
            
            <!-- 右侧排行榜：跨越整个高度 -->
            <div class="ranking-section">
              <QualificationRanking></QualificationRanking>
            </div>
          </div>
            <Charts></Charts>
        </BorderBox12>
      </div>

    </BorderBox11>
  </dv-full-screen-container>
</template>

<script setup>
import { BorderBox11,BorderBox12 } from '@dataview/datav-vue3';  // 从插件中引入组件
import CurrentTime from './views/Currenttime.vue'
import HeaderCenter from './views/HeaderCenter.vue'
import QualificationRanking from './views/QualificationRanking.vue'
import Data from './views/Data.vue'
import Charts from './views/charts/index.vue'
</script>


<style scoped>
.box {
  width: 98%;
  height: 95%;
  position: relative;
  left: 1vw;
  top: 5vh;
}

.box-content {
  width: 100%;
  height:40%;
  display: flex;
  gap: 20px;
  padding: 20px;
}

/* 左侧内容区域 */
.left-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 上方时间和标题行 */
.top-row {
  height: 120px;
  display: flex;
  gap: 20px;
}

.time-section {
  width: 300px;
}

.title-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 下方数据展示区域 */
.data-section {
  flex: 1;
}

/* 右侧排行榜 */
.ranking-section {
  flex: 1;
  height: 100%;
}
</style>