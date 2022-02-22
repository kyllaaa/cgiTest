import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'
import axios from 'axios'
import Swal from 'sweetalert2'
import jquery from 'jquery'


Vue.prototype.$axios = axios
Vue.prototype.$swal = Swal
Vue.prototype.$jquery = jquery

Vue.prototype.$role_colors = {
  Developer : {
    color : '#2ecc71',
    dark : true
  }
}

Vue.prototype.$randompass = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

Vue.use(Router)

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  { path: '/', name: 'home', component: page('welcome.vue') },
]

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
