<script setup lang="ts">
import { ref } from 'vue'
import Coordinates from './Coordinates.vue'

const points = ref([
    {x:0.5,y:0.5,title:"做完这个"},
    {x:-0.5,y:0.5,title:"做完这个"},
    {x:0.5,y:-0.8,title:"做完这个"},
])
</script>

<template>
    <Coordinates :points="points"></Coordinates>
</template>

<style scoped>
</style>