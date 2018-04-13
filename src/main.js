import Vue from 'vue'
import App from './App'
import router from './router'
/* MOdulos para las grafica de los Nodos */
import VueMindmap from 'vue-mindmap'
import 'vue-mindmap/dist/vue-mindmap.css'
Vue.use(VueMindmap)
/* import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 */
/* Vue.use(BootstrapVue) */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
