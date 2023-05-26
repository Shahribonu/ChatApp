import { defineStore } from 'pinia';
import { chats, Chat } from '../../data';
import { ref,Ref } from 'vue';

interface Message {
  id: number;
  sender: string;
  text: string;
}

export const useChatStore = defineStore('chat', {
  state: () => ({
    chatData: ref(chats) as Ref<Chat[]>,
    currentUser: ref([]) as Ref<Chat[]>,
    messages: ref([]) as Ref<Message[]>,
 
  }),
  getters: {
    getChats(): Chat[] {
      return this.chatData;
    },
    getCurrentUser():Chat[]{
      return this.currentUser;
    },
    getMessages():Message[]{
      return this.messages;
    },
  },
  actions: {
    addCurrentUser(chat:Chat[]) {
      this.currentUser = chat;
    },
    addMessage(newMessage: Message) {
      this.messages = [...this.messages, newMessage];
    },
   
  },
});