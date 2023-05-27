<template>
  <div class="login-page h-full min-h-screen flex justify-center items-center">
    <div class="">
      <h2 class="text-3xl mb-8 text-center font-bold text-gray-500">Login</h2>
      <form @submit.prevent="signIn">
        <input
          type="text"
          v-model="username"
          placeholder="username"
          class="border"
        />

        <button type="submit" class="bg-green-500">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../auth.store";
import { useToast } from "vue-toastification";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const username = ref("");
const toast = useToast();

const signIn = () => {
  if (username.value) {
    route.meta.layout = false;
    authStore.changeCurrentuser(username.value);

    toast.success(`Welcome to the chat ${authStore.getCurrentUser}`);
    router.push("/home");
  }
};
</script>

<style scoped>
form {
  display: block;
}
input {
  border: 2px solid rgb(55, 54, 54);
  display: block;
  width: 100%;
  padding: 10px 30px;
  outline: none;
  border-radius: 10px;
}
button {
  background-color: black;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
  border-radius: 10px;
  display: inline-block;
}
</style>
