<template>
  <h1>Count is {{ store.count }}</h1>
  <h1>Double is {{ store.doubleCount }}</h1>
  <button @click="store.increment(1)">Increment</button>
  <button @click="store.waitAndAdd(1)">Wait + Increment</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
store.count++
store.increment(2)
</script>


<style scoped>

</style>
