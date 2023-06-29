import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from "./components/pages/Login.vue"
import Test from "./components/Test.vue"
import Home from "./components/pages/Home.vue"
import VueCookies from 'vue-cookies'
import CreateCar from "./components/pages/CreateCar.vue"
import Register from "./components/pages/Register.vue"
import Start from "./components/pages/Start.vue"
import App from './App.vue'
import CarInfo from "./components/pages/CarInfo.vue"
import { createPinia } from 'pinia';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', name:'Start', component: Start},
        {path:'/LoggedIn', name:'Home', component: Home},
        {path:'/Login', name:'Login', component: Login},
        {path:'/Register', name:'Register', component: Register},
        {path:'/createCar', name:'createCar', component: CreateCar},
        {path:'/Test', name:'Test', component: Test},
        {path:'/CarInfo/:id', name:'CarInfo', component: CarInfo}
    ]
})

const pinia = createPinia()
const app = createApp(App)



app.use(pinia)
.use(VueCookies)
.use(router)
app.mount('#app')
