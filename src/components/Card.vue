<script setup lang="ts">
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px; /* 根据需要调整内边距 */
  /* 指定固定的宽度和高度，或者使用max-width和max-height来控制大小 */
  width: 800px;
  height: 800px;
  /* 指定居中对齐 */
  margin: 0 auto;
  /* 如果需要垂直居中，可以使用flex布局 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  /* 在小屏幕下调整Card的样式 */
  .card {
    /* 适度减小宽度 */
    width: 550px;
    height: 550px;
  }
}

@media (max-width: 550px) {
  /* 在小屏幕下调整Card的样式 */
  .card {
    /* 适度减小宽度 */
    width: 250px;
    height: 250px;
  }
}
</style>
