<script setup lang="ts">
import Coordinates from './Coordinates.vue'
import { Point } from '../interfaces';

const {points} = defineProps<{
    points: Point[]
}>()
</script>

<template>
    <Coordinates :points="points"></Coordinates>
</template>

<style scoped>
</style>