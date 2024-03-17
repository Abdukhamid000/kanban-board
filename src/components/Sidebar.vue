<template>
  <div
    class="fixed pt-[calc(80px+38px)] flex flex-col justify-between left-0 top-0 w-[261px] h-screen bg-dark text-secondary transition-all duration-300"
  >
    <div>
      <h5 class="px-4 text-xs !leading-[15px] tracking-[2.4px] font-bold">
        ALL BOARDS ({{ getBoards.length }})
      </h5>

      <ul class="w-[90%] mt-6">
        <li
          v-for="item of getBoards"
          :key="item.id"
          class="capitalize bg-main py-4 rounded-tr-full rounded-br-full font-bold text-[15px]"
        >
          <router-link to="/">
            <span class="w-full pl-4"> {{ item.title }} </span>
          </router-link>
        </li>
        <li
          class="capitalize bg-main py-4 rounded-tr-full rounded-br-full font-bold text-[15px]"
        >
          <button
            class="block"
            @click="createBoard({ title: 'asdasd', id: 2 })"
          >
            <span class="w-full pl-4">+Create New Board </span>
          </button>
          <button class="block" @click="createRoute">
            <span class="w-full pl-4">+Create New route </span>
          </button>
        </li>
      </ul>
    </div>

    <div class="mt-auto">
      <button
        @click="$emit('toggle')"
        class="capitalize transition-all mb-2 duration-300 block w-[90%] hover:bg-white py-4 rounded-tr-full rounded-br-full font-bold text-[15px]"
      >
        Hide Sidebar
      </button>
    </div>
    <Modal />
  </div>
</template>

<script setup lang="ts">
import { useBoardStore } from "@/store/board";
import { useRouter } from "vue-router";
import Main from "@/pages/Main.vue";
import Modal from "./Modal.vue";

const { getBoards, createBoard } = useBoardStore();
const router = useRouter();

function createRoute() {
  router.addRoute({ name: "newRecord", path: "/new", component: Main });
  router.push({ name: "newRecord" });
}
</script>

<style scoped></style>
