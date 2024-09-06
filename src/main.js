import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

//pinia三部曲
//在src/store/index.js中引入defineStore，寫入useStore=defineStore('名字',()=>{定義數值與方法且return出去})並導出
//在main.js引入createPinia from 'pinia'，pinia=createPinia()，app.use(pinia)
//在需要使用的地方引入useStore，並聲明store=useStore()，store.x即是得到的值

//router三部曲
//在src/router/index.js中引入createRouter、createWebHistory from vueRouter
//建立路由表routes=[{},{},...]，{path,name,component,meta}
//const router = createRouter({history=createWebHistory(import.meta.env.BASE_URL),routes})
//export default router ，並在main.js中引入router，直接.use(router)
const pinia=createPinia()
const app = createApp(App)

app.use(pinia).use(router).mount('#app')
