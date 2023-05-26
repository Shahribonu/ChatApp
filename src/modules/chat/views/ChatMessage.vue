<template>
  <div>Chat Message --- {{ id }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();

const id = Number(route.params.id);
</script>

<style lang="scss" scoped></style>
