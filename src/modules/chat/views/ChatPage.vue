<template>
  <div class="flex flex-column">
    <ChatList />

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatList from "../components/ChatList.vue";
</script>

<style lang="scss" scoped></style>
