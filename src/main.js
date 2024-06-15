import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import VueRouter from 'vue-router'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import OrderDetail from './components/OrderDetail.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  { path: '/', component: ProductList },
  { path: '/product/:id', component: ProductDetail, props: true },
  { path: '/order/:id', component: OrderDetail, props: true }

  // Otras rutas de tu aplicación
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')