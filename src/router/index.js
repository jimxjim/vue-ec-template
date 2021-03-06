import Vue from 'vue';
import Router from 'vue-router';
import Merchandises from '@/components/MerchandiseDashboard/Merchandises';
import Login from '@/components/Login/Login';
import Register from '@/components/Register/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Merchandises',
      component: Merchandises,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
  ],
});
