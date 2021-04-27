import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import i18n from '@/languages'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import 'element-plus/packages/theme-chalk/src/index.scss'
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/packages/theme-chalk/src/display.scss'

createApp(App)
  .use(router)
  .use(i18n)
  .use(ElementPlus, { i18n: i18n.global.t })
  .mount('#app')
