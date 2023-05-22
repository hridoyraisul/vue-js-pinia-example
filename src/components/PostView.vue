<script>
import {useCounterStore} from "@/stores/Counter";
export default {
    name: "PostView",
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
      <h1>{{counterStore.post?.title}}</h1>
      <p>{{counterStore.post?.body}}</p>
  </div>
</template>

<style scoped>

</style>