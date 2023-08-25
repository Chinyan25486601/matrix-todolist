<script setup lang="ts">
const emit = defineEmits(['click'])
const {style} = defineProps<{style?:any}>()
</script>

<template>
    <div class="circle-button" @click="emit('click')" :style="style">
      <slot></slot>
    </div>
</template>

<style scoped>
.circle-button {
  display: flex;
  margin: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background-color: white;
  width: 40px;
  height: 40px;
  font-size: 30px;
}

.circle-button:hover {
  transform: scale(1.05);
}
</style>
