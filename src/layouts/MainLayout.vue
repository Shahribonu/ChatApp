<template>
  <main class="main-layout overflow-y-hidden">
    <TopBar />
    <div class="main-wrapper flex h-full">
      <div class="side flex h-full">
        <Sidebar />
      </div>

      <div class="main-router-content grow overflow-y-scroll">
        <slot />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Sidebar from "./Sidebar.vue";
import TopBar from "./TopBar.vue";

export default {
  components: {
    Sidebar,
    TopBar,
  },
};
</script>

<style>
.main-layout {
  display: block;
  height: 100vh;
}
.main-layout .main-wrapper {
  flex-grow: 1;
}
.main-router-content::-webkit-scrollbar {
  display: none;
}
.main-router-content {
  background: #f1f1f1;
}
</style>
