<template>
  <div class="w-[250px] h-full border-2 shadow-md bg-white">
    <input
      class="border-1 outline-none p-2 text-xl w-[245px] rounded-md"
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
        class="shadow-sm mt-4 py-3 px-4 flex align-center bg-gray-100 rounded-md"
      >
        <div>
          <img :src="chat.avatar" />
        </div>
        <div class="content">
          <div class="title">{{ chat.name }}</div>
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
import { Chat } from "../../../data";

const searchText = ref("");
const chatStore = useChatStore();
const router = useRouter();
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

<style scoped></style>
