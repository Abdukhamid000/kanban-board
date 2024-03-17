<template>
  <main>
    <Header />
    <Sidebar @toggle="toggleSidebar" :class="{ '!-left-full': collapsed }" />
    <ToggleEye @eyeClick="toggleSidebar" v-show="collapsed" />

    <div
      class="w-[calc(100%-261px)] ml-[261px] transition-all duration-300 px-6"
      :class="{ 'w-full !ml-0': collapsed }"
    >
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import ToggleEye from "./components/ToggleEye.vue";
import Header from "./layouts/Header.vue";

const collapsed = ref(false);

function toggleSidebar() {
  collapsed.value = !collapsed.value;
}
</script>
