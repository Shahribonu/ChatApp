<template>
  <div
    class="message flex flex-col justify-between h-full bg-white w-full relative"
  >
    <div class="bg-gray-50 px-3 py-2">
      <h1 class="text-xl font-semibold">
        {{ chatStore.chatData[Number(route.params.id) - 1].name }}
      </h1>
      <p class="text-sm">last seen recently</p>
    </div>

    <div>
      <div class="message-main max-h-[600px] overflow-y-scroll relative">
        <ul>
          <li
            v-for="message in filteredMockMessages"
            :key="message.id"
            class="message-item bg-gray-100 relative px-2 py-3 my-5 mx-4 max-w-[380px] rounded-md"
            :class="{
              'bg-green-300 ': message.is_sender === 'false',
            }"
          >
            {{ message.message }}
            <p class="absolute bottom-1 right-1 pt-8 text-xs">
              {{ message.time }}
            </p>
          </li>
        </ul>
      </div>

      <div class="">
        <form
          @submit.prevent="sendMessage"
          class="send-message flex align-center justify-between"
        >
          <input v-model="newMessage" placeholder="Send messages.." />
          <div
            type="submit"
            class="send-button bg-green-400 p-4 cursor-pointer"
          >
            <i class="fab fa-telegram-plane" color="white"></i>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import mockMessage from "../mockMessages.json";
import { useChatStore } from "../chat.store";

const route = useRoute();
const chatStore = useChatStore();
const newMessage = ref("");

const filteredMockMessages = computed(() => {
  const userId = Number(route.params.id);
  return mockMessage.filter((message: any) => message.userId == userId);
});

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();

const sendMessage = () => {
  if (newMessage.value) {
    const sentNewMessage = {
      id: String(mockMessage.length + 1),
      userId: String(Number(route.params.id)),
      message: newMessage.value,
      created_at: "2023-05-25",
      time: `${hours}:${minutes}`,
      is_sender: "false",
    };

    filteredMockMessages.value.push(sentNewMessage);

    newMessage.value = "";
  }
};
</script>

<style lang="scss" scoped>
.message {
  position: relative;
  width: 100% !important;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.send-message {
  margin: 2px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: 0.5);
  border-radius: 10px;
  padding: 0 0px 0 10px;
  height: 58px;
  input {
    outline: none;
    border-radius: 10px;
    height: 100%;
    width: 100%;
  }
  .send-button {
    border-radius: 0 10px 10px 0;
  }
}
// .message-item {
//   display: block;
// }
</style>
