<template>
  <div class="login-page h-full min-h-screen flex justify-center items-center">
    <div width="400" class="">
      <h2 class="text-3xl mb-8 text-center font-bold text-gray-500">Login</h2>
      <form @submit.prevent="signIn">
        <input
          type="text"
          v-model="username"
          placeholder="username"
          class="border"
        />

        <button type="submit" class="bg-green-500" @click="signIn">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { useAuthStore } from "../auth.store";
import { ref } from "vue";
// import { useRouter } from "vue-router";

const username = ref("");

// const authStore = ref(useAuthStore());
// const router = useRouter();

const signIn = async () => {};
</script>

<style scoped>
form {
  display: block;
}
input {
  border: 1px solid black;
  display: block;
  margin: 10px 0;
  width: 100%;
}
button {
  background-color: black;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  display: inline-block;
}
</style>
