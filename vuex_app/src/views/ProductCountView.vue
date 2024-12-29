<template>
    <div class="product">
        <h1>Hello from Product Page</h1>
        <h3>Counter : {{ productCounter.counter }}</h3>
        <p>Double Counter : {{ getters.doubleCounter }}</p>
        <button @click="$store.dispatch('increment')">Count up</button>
        <button @click="$store.dispatch('decrement')">Count down</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
const productCounter = store.state.productCounter;
const getters=store.getters;
console.log(store)
</script>