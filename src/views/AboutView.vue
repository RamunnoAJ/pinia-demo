<template>
  <h1>This is the about section</h1>
  <button class="increase" type="button">seconds: {{ seconds }}</button>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useCounter } from '../stores/piniacounter.js'

const counterStore = useCounter()
const { seconds, getSeconds } = storeToRefs(counterStore)
const { triggerCounter } = counterStore


onMounted(() => seconds.value == 0 ? setInterval(() => {
  startCounter()
}, 1000) : '')

function startCounter() {
  counterStore.$patch((state) => {
    seconds: seconds.value + 1
  })
}
</script>

<style scoped>
a {
  color: #42b983
}

.increase {
  padding: 1rem 2rem;
  border: none;
  outline: none;
  background: rgb(19, 18, 18);
  color: rgb(248, 248, 248);
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 1px 1px #ccc;
}
</style>
