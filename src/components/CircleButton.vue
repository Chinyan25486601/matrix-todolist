<script setup lang="ts">
</script>

<template>
    <div class="circle-button">
      <slot></slot>
    </div>
</template>

<style scoped>
.circle-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: white;
  width: 40px;
  height: 40px;
}

/* 在鼠标悬停时可以添加额外的样式，如变化颜色或缩放效果 */
.circle-button:hover {
  transform: scale(1.05);
}
</style>
