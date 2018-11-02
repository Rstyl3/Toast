import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toast from './modules/toastPlugin.js'

Vue.use(Toast)

library.add(faWindowClose)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('toast', Toast)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
