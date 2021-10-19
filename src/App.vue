<script setup lang="ts">
import { ref } from "vue";
import generater from "fake-code-generater";

const code = ref(generater());

const changeCode = () => {
  code.value = generater();
};
</script>

<template>
  <button @click="changeCode">change</button>
  <div>{{ code.value }}</div>
</template>

<style></style>
