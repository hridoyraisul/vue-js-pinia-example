<script setup>

import {useCounterStore} from "@/stores/Counter";
const counterStore = useCounterStore()

</script>

<template>
  <div class="app">
        <h2>{{counterStore.evenOrOddValue.toUpperCase()}}</h2>
    </div>
</template>

<style scoped>

</style>