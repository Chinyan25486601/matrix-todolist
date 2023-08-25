<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { useRoute } from 'vue-router'

import { Point } from '../interfaces';

const id = <number><unknown>(useRoute().params.id).toString();

const todos = useLocalStorage<Point[]>('todos', [])
</script>

<template>
    <div class="form-container">
    <form>
      <div class="form-group">
        <label for="title" class="label">标题</label>
        <input type="text" id="title" v-model="todos[id].title" class="input" />
      </div>

      <div class="form-group">
        <label for="description" class="label">描述</label>
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
  width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
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
  width: 100%;
  height: 10px;
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
</style>