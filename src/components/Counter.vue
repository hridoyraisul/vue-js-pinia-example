<script>
import {useCounterStore} from "@/stores/Counter";

export default {
    name: "CounterPage",
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
        <button @click="this.counterStore.increment">Increment</button> &nbsp;
        <button @click="this.counterStore.decrement">Decrement</button>&nbsp;
        <button @click="this.counterStore.reset">Reset</button>
    </div>
</template>

<style scoped>

</style>