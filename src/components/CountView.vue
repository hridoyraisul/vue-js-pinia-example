<script>
import {useCounterStore} from "@/stores/Counter";

export default {
    name: "CounterView",
    data() {
        const counterStore = useCounterStore();
        return {
            counterStore
        }
    },
}
</script>

<template>
  <div>
      <h1>{{counterStore.countValue}}</h1>
  </div>
</template>

<style scoped>

</style>