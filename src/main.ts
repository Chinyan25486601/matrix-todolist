import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Matrix from './components/Matrix.vue'
import TodoDetail from './components/TodoDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: "/", component: Matrix},
    {path: "/todo/:id", component: TodoDetail}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')