<template>
  <div class="chat-list h-full bg-white">
    <input
      class="chat-list-input outline-none p-2 text-xl h-[60px] w-[245px] rounded-md"
      type="text"
      placeholder="Search... "
      v-model="searchText"
    />

    <ul>
      <li
        v-for="(chat, index) in filteredChats"
        :key="index"
        :chat="chat"
        @click="selectChat(chat)"
        class="shadow-sm mt-2 py-3 px-4 flex items-center bg-gray-50 rounded-md"
      >
        <div class="mr-4">
          <!-- <img :src="chat.avatar" /> -->
          <img src="../../../assets/images/girl.png" alt="" />
        </div>
        <div class="content">
          <div class="title font-semibold">{{ chat.name }}</div>
          <div class="message">{{ chat.lastMessage }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useChatStore } from "../chat.store";
import { useRouter } from "vue-router";
import { Chat } from "../data";
import mockMessage from "../mockMessages.json";

console.log(mockMessage, "mockMessage");

const searchText = ref("");
const chatStore = useChatStore();
const router = useRouter();
// const route = useRoute();
const chats: Chat[] = chatStore.getChats;

const filteredChats = computed(() => {
  const searchLowerCase = searchText.value.toLowerCase();
  return chats.filter((chat: any) =>
    chat.name.toLowerCase().includes(searchLowerCase)
  );
});

const selectChat = (chat: Chat) => {
  router.push(`/chat/messages/${chat.id}`);
};
</script>

<style scoped>
.chat-list {
  width: 25%;
}
.chat-list-input {
  border: 1px solid rgba(63, 59, 59, 0.5);
  width: 100%;
}
</style>
