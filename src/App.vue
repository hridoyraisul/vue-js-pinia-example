<template>
   <div id="app">
        <CountView/>
        <CounterPage/>
        <EvenOddCalculator/>
    </div>
</template>

<script>
import CounterPage from './components/Counter.vue'
import EvenOddCalculator from './components/EvenOddCalculator.vue'
import CountView from "@/components/CountView.vue";

export default {
  name: 'App',
  components: {
      CountView,
      CounterPage,
      EvenOddCalculator
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
