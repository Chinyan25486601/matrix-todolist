<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const windowSize = useWindowSize()

// 默认情况下
let width = computed<number>(()=>{
    if( windowSize.width.value <= 550) return 290
    else if(windowSize.width.value <= 768) return 520
    else return 750
})
let height = computed<number>(()=>{
    if( windowSize.width.value <= 550) return 290
    else if(windowSize.width.value <= 768) return 520
    else return 750
})

const points = ref([{x:1,y:1,description:"aaa"}])

const maximumX = 5
const maximumY = 5
const translateX = (x: number) => (x + maximumX) * (width.value / (2 * maximumX));
const translateY = (y: number) => height.value - (y + maximumY) * (height.value / (2*maximumY))
</script>

<template>
    <div class="coordinate-system" :width="width+10" :height="height+10">
      <svg :width="width" :height="height">

        <!-- 绘制坐标轴 -->
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
        
        <!-- 绘制坐标系文本 -->
        <text x="75%" y="25%" class="quadrant-text">一</text>
        <text x="75%" y="75%" class="quadrant-text">四</text>
        <text x="25%" y="25%" class="quadrant-text">二</text>
        <text x="25%" y="75%" class="quadrant-text">三</text>
        
        <!-- 根据传入的点坐标绘制点和描述 -->
        <g v-for="(point, index) in points" :key="index">
          <circle :cx="translateX(point.x)" :cy="translateY(point.y)" r="3" fill="blue" />
          <text :x="translateX(point.x) + 5" :y="translateY(point.y) - 5">{{ point.description }}</text>
        </g>
      </svg>
    </div>
</template>
  
<style scoped>
  .coordinate-system {
    display: inline-block;
  }
  .quadrant-text {
    fill: gray;
  }
</style>