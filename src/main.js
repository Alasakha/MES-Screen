import { createApp } from 'vue'
import { createPinia } from 'pinia'
import DataVVue3 from '@kjgl77/datav-vue3';  // 使用命名导入
import router from './router'
import App from './App.vue'
import * as DataV from '@dataview/datav-vue3';



const app = createApp(App)
app.use(DataV, { classNamePrefix: 'dv-' });
app.use(router)
app.use(DataVVue3)
app.use(createPinia())
app.mount('#app')
