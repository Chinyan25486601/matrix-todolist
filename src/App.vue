<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

import Card from './components/Card.vue'
import CircleButton from './components/CircleButton.vue'
import { Point } from './interfaces';

const todos = useLocalStorage<Point[]>('todos', [
    {id:114,x:0.5,y:0.5,title:"做完这个",description:""},
    {id:514,x:-0.5,y:0.5,title:"做完这个",description:""},
    {id:1919,x:0.5,y:-0.8,title:"做完这个",description:""},
])
</script>

<template>
    <div class="main">
        <Card>
            <RouterView :points="todos"></RouterView>
        </Card>
        <div class="buttons">
            <div class="apptitle">矩待办</div>
            <CircleButton>+</CircleButton>
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
