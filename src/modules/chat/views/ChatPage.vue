<template>
  <div class="chat-main bg-white flex flex-column">
    <ChatList />

    <div class="message">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatList from "../components/ChatList.vue";
</script>

<style scoped>
.chat-main {
  height: 100vh;
  width: 100%;
  position: relative;
}
.message {
  width: 75%;
}
</style>
