<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import { useRoute } from 'vue-router'

import { Point } from '../interfaces';

const id = <number><unknown>(useRoute().params.id).toString();

const todos = useLocalStorage<Point[]>('todos', [])

let thisPoint = todos.value[id]
</script>

<template>
    {{ thisPoint }}
</template>

<style scoped>
</style>