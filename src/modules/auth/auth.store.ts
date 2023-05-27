import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    hasLayout: false,
    currentUser: ''
  } ),
  getters: {
   getHasLayout: (s) =>s.hasLayout,
   getCurrentUser: (s) =>s.currentUser,
  },
  actions: {
    changeHasLayout(){
      this.hasLayout = !this.hasLayout;
    },
    changeCurrentuser(name:string){
      this.currentUser = name
  },
}
});