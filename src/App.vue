<script setup lang="ts">
import Card from './components/Card.vue'
import CircleButton from './components/CircleButton.vue'
</script>

<template>
    <div class="main">
        <Card>
            <RouterView></RouterView>
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
