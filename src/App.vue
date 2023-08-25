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

@media (max-width: 768px) {
  /* 在小屏幕下调整Card的样式 */
  .main {
    flex-direction: column;
    align-items: start;
  }
}
</style>
