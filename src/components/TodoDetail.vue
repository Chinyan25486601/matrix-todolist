<script setup lang="ts">
import { onMounted } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { useRoute } from 'vue-router'

import { Point } from '../interfaces';

const id = <number><unknown>(useRoute().params.id).toString();

const todos = useLocalStorage<Point[]>('todos', [])

onMounted(() => {
    if(!todos.value[id].title) todos.value[id].title=""
    if(!todos.value[id].description) todos.value[id].description=""
    if(!todos.value[id].x) todos.value[id].x=0
    if(!todos.value[id].y) todos.value[id].y=0
})
</script>

<template>
    <div class="form-container">
    <form>
      <div class="form-group">
        <label class="label">标题</label>
        <input type="text" id="title" v-model="todos[id].title" class="input" />
      </div>

      <div class="form-group">
        <label class="label">描述</label>
        <textarea id="description" v-model="todos[id].description" class="input"></textarea>
      </div>

      <div class="form-group">
        <label class="label">重要程度</label>
        <input type="range" min="-1" max="1" step="0.01" v-model="todos[id].y" class="slider" />
      </div>

      <div class="form-group">
        <label class="label">紧急程度</label>
        <input type="range" min="-1" max="1" step="0.01" v-model="todos[id].x" class="slider" />
      </div>

      <!-- <button type="submit" class="submit-button">提交</button> -->
    </form>
  </div>
</template>

<style scoped>
.form-container {
  width: 500px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.label {
  width: 120px;
}

.input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.slider {
  flex-grow: 1;
  -webkit-appearance: none;
  border-radius: 5px;
  background: #ccc;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #007BFF;
  cursor: pointer;
}

@media (max-width: 768px) {
    .form-container {
      width: 245px;
    }
    .label {
        width: 80px;
    }
}
</style>