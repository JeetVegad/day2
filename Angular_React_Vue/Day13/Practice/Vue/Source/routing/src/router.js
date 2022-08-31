import { createRouter,createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue'
import HoMe from './components/HoMe.vue'

const routes = [{
    path:'/:id',
    name:'HelloWorld',
    component:HelloWorld
},
{
    path:'/home',
    name:'HoMe',
    component:HoMe
}]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router;