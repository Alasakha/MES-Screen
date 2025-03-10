import * as echarts from 'echarts';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import DataVVue3 from '@kjgl77/datav-vue3'

import App from './App.vue'


const app = createApp(App)

app.use(createPinia())

app.use(DataVVue3)
app.mount('#app')
