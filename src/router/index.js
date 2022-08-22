import { createWebHistory, createRouter } from "vue-router";
import HomeApp from '../views/HomeApp.vue'
import UserList from '../components/UserList.vue'
import UserDetails from '@/components/UserDetails'
import MyRegistration from '@/components/MyRegistration'
 
 
  const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp,
  },
  {
    path: '/users',
    name: 'userlist',
    component: UserList,
  },
  {
    path: '/users/:userId',
    name: 'userdetails',
    component: UserDetails,
  },
  {
    path: '/about',
    name: 'MyRegistration',
    component: MyRegistration,
  },
]
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
export default router;