<script>
import {useCounterStore} from "@/stores/Counter";

export default {
    name: "EvenOddCalculator",
    data() {
        const counterStore = useCounterStore();
        return {
            counterStore
        }
    },
}
</script>

<template>
  <div class="app">
        <h2>{{counterStore.evenOrOddValue.toUpperCase()}}</h2>
    </div>
</template>

<style scoped>

</style>