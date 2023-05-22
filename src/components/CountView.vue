<script setup>
import {useCounterStore} from "@/stores/Counter";

const counterStore = useCounterStore()
</script>

<template>
  <div>
      <h1>{{counterStore.countValue}}</h1>
  </div>
</template>

<style scoped>

</style>