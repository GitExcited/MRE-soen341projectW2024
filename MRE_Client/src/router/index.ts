import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' }, // Redirect from root to /home
    { path: '/signup', component: SignUp },
    { path:'/home', component:Home},
    {path:'/services', component:Services},
  ]
})

export default router