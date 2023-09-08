<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const count = ref(99)
let timer: any
onMounted(() => {
  timer = setInterval(() => {
    count.value--
    if (!count.value)
      count.value = 99
  }, 1000)
})
onUnmounted(() => {
  if (timer)
    clearInterval(timer)
})
</script>

<template>
  <div>
    <span class="countdown font-mono text-6xl">
      <span :style="`--value:${count};`" />
    </span>
  </div>
</template>
