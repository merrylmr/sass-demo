import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import zzUi from '@/zz-ui/index.js'

Vue.use(zzUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
