<template>
  <div
    @click="$emit('eyeClick')"
    class="bg-dark fixed bottom-[5%] py-4 px-5 rounded-tr-full rounded-br-full cursor-pointer"
  >
    <img
      src="https://kanban-task-management-app.netlify.app/static/media/icon-show-sidebar.b186c9a8e4a2e4d7d83e0676d3e128fc.svg"
      alt="eye"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
