<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

import Card from './components/Card.vue'
import CircleButton from './components/CircleButton.vue'
import { Point } from './interfaces';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const Router = useRouter()
const Route = useRoute()

const todos = useLocalStorage<Point[]>('todos', [{
    "x": 0,
    "y": 0,
    "title": "",
    "description": ""
}])

if(todos.value.length>=100) todos.value = [{
    "x": 0,
    "y": 0,
    "title": "",
    "description": ""
}];

const varify_todos = ()=>{
    for(let i = 0; i!=todos.value.length; i++){
        todos.value[i].x = parseFloat(todos.value[i].x.toString())
        todos.value[i].y = parseFloat(todos.value[i].y.toString())
    }
}

onMounted(varify_todos)

const btnAddClick = ()=>{
    todos.value.push({
        x:0,y:0,title:"",description:""
    })
    console.log(todos.value)
    Router.push(`/todo/${todos.value.length-1}`)
}

const btnBackClick = ()=>{
    Router.push("/")
    varify_todos()
}

const btnDelClick = ()=>{
    const match = /(\d+)/.exec(Route.fullPath)
    if(!match) return
    const id = <number><unknown>(match[0].toString())
    todos.value.splice(id,1)
    Router.push("/")
}
</script>

<template>
    <div class="main">
        <Color></Color>
        <Card>
            <RouterView :points="todos"></RouterView>
        </Card>
        <div class="buttons">
            <div class="apptitle">矩待办</div>
            <CircleButton @click="btnDelClick()" :style="`display: ${Route.name == 'todo'?'flex':'none'}`">x</CircleButton>
            <CircleButton @click="btnBackClick()" :style="`display: ${Route.name == 'todo'?'flex':'none'}`">√</CircleButton>
            <CircleButton @click="btnAddClick()" :style="`display: ${Route.name == 'todo'?'none':'flex'}`">+</CircleButton>
        </div>
    </div>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    align-items: end;
}
.main>* {
    margin: 8px;
}
.buttons {
    display: flex;
}
.apptitle {
    font-size: 30px;
}

@media (min-width: 768px) {
    .buttons {
        flex-direction: column;
        height: 800px;
        justify-content: center;
    }
    .apptitle {
        writing-mode: vertical-lr;
        margin-bottom: auto;
        margin-top: 0px;
    }
}

@media (max-width: 768px) {
  /* 在小屏幕下调整Card的样式 */
  .main {
    flex-direction: column;
    align-items: start;
  }
  .buttons {
    width: 100%;
    justify-content: center;
    flex-direction: row-reverse;
  }
  .apptitle {
    margin-left: auto;
    margin-right: 0px;
  }
}
</style>
