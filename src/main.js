import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import './styles/index.scss'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'// Vuesax styles
import 'material-icons/iconfont/material-icons.scss'
// import theme from './themes/default.js' // No funciona

Vue.use(Vuesax)
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
