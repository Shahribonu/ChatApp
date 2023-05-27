import { defineStore } from 'pinia';
import { chats, Chat } from './data';
import { ref,Ref } from 'vue';
import mockData from './mockMessages.json'
import { IChatMessage } from './types/chatTypes';



export const useChatStore = defineStore('chat', {
  state: () => ({
    chatData: ref(chats) as Ref<Chat[]>,
    currentUser: ref([]) as Ref<Chat[]>,
    messages: [] as IChatMessage[],

 
  }),
  getters: {
    getChats(): Chat[] {
      return this.chatData;
    },
    getCurrentUser():Chat[]{
      return this.currentUser;
    },
   getMessages: (s) =>s.messages as IChatMessage[]

  },
  actions: {
    addCurrentUser(chat:Chat[]) {
      this.currentUser = chat;
    },
    addMessage(newMessage: IChatMessage) {
      this.messages.push(newMessage);
    },
    fetchChatMessages(){
      this.messages = mockData
    }
   
  },
});