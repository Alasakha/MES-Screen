import { createApp } from 'vue';
import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
import App from './App.vue';

const app = createApp(App);
app.use(DataV, { classNamePrefix: 'dv-' });

// setClassNamePrefix('dv-')