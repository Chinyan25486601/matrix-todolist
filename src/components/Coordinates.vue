<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

import {Point} from './../interfaces'
import { useRouter } from 'vue-router';

const windowSize = useWindowSize()

// 默认情况下
let width = computed<number>(()=>{
    if( windowSize.width.value <= 550) return 245
    else if(windowSize.width.value <= 768) return 520
    else return 750
})
let height = computed<number>(()=>{
    if( windowSize.width.value <= 550) return 245
    else if(windowSize.width.value <= 768) return 520
    else return 750
})


const {points} = defineProps<{
    points: Point[]
}>()

const maximumX = 1
const maximumY = 1
const translateX = (x: number) => (x + maximumX) * (width.value / (2 * maximumX));
const translateY = (y: number) => height.value - (y + maximumY) * (height.value / (2*maximumY))

const getColor = (x:number, y:number) => {
    let influencer:number = 1
    let rawColor: number[] = [0,0,0]
    if(x>=0 && y>=0){
        influencer = (x+y)/2
        rawColor = [217,36,71]
    } else if (x>y){
        influencer = x
        rawColor = [52,83,138]
    } else if (y>=x){
        influencer = y
        rawColor = [123,47,93]
    }
    influencer = Math.sqrt(0.5*influencer+0.5)

    const color = rawColor.map(c=>(255-(255-c)*influencer))
    return `rgb(${color[0]},${color[1]},${color[2]})`
}

const Router = useRouter()

const pointOnClick = (id:number)=>{
    Router.push(`/todo/${id}`)
}
</script>

<template>
    <div class="coordinate-system" :width="width+10" :height="height+10">
      <svg :width="width" :height="height">

        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="black" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" />
        
        <text x="75%" y="25%" class="quadrant-text" text-anchor="middle">紧急重要</text>
        <text x="75%" y="75%" class="quadrant-text" text-anchor="middle">紧急不重要</text>
        <text x="25%" y="25%" class="quadrant-text" text-anchor="middle">重要不紧急</text>
        <text x="25%" y="75%" class="quadrant-text" text-anchor="middle">不重要不紧急</text>
        
        <a v-for="(point, index) in points" :key="index" @click="pointOnClick(index)">
            <g :style="`--point-color: ${getColor(point.x, point.y)}`">
                <circle class="outer" :cx="translateX(point.x)" :cy="translateY(point.y)" r="10" :fill="getColor(point.x, point.y)"/>
                <circle class="inner" :cx="translateX(point.x)" :cy="translateY(point.y)" r="7" fill="white" />
                <text :x="translateX(point.x) + 18" :y="translateY(point.y) + 5">{{ point.title }}</text>
            </g>
        </a>
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
.outer {
  position: relative;
  stroke: var(--point-color);
  animation: scaleAnimation 3s infinite;
}

g:hover {
    cursor: pointer;
}

g:hover > .outer {
  animation: scaleAnimation 1s infinite;
}

/* 定义鼠标悬停时的动画 */
@keyframes scaleAnimation {
  0%, 100% {
    stroke-width: 8px;
  }
  50% {
    stroke-width: 5px;
  }
}
</style>