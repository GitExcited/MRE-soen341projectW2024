import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import RentalForm from '@/views/RentalForm.vue';
import Confirmation from '@/views/Confirmation.vue';
import ToRent from '@/views/ToRent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' }, // Redirect from root to /home
    { path: '/signup', component: SignUp },
    { path: '/torent', component: ToRent },
    { path: '/home', component: Home },
    { path: '/services', component: Services },
    { path: '/rentalform', component: RentalForm },
    { path: '/confirmation', component: Confirmation } // Add the Confirmation route
  ]
});

export default router;