<template>
  <nav>
    <Headers />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup>

import { useContactsStore } from "./store";
import Headers from "./components/Headers.vue"
const store = useContactsStore();

</script>

<style lang="scss">
</style>
