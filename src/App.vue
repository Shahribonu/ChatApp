<template>
  <MainLayout v-if="!route.meta.layout">
    <RouterView />
  </MainLayout>
  <RouterView v-else />
</template>

<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";

import { useRoute } from "vue-router";
const route = useRoute();

components: {
  MainLayout;
}
</script>
