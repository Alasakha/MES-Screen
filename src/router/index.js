// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 导入你的页面组件
import ProduceProject from '../views/ProdeucePlan/index.vue';
import Quality from '../views/quality/index.vue'


// 路由配置
const routes = [
  { path: '/', component: ProduceProject },  // 默认首页
  { path: '/quality', component: Quality }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),  // 使用浏览器的历史记录模式
  routes,  // 路由数组
});

export default router;  // 导出路由实例
