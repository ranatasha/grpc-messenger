<template>
  <div class="chat d-flex flex-column w-100 bg-blue-grey-lighten-5 pa-2">
    <ChatHeader class="chat__header justify-start ma-2"/>

    <div class="chat__content w-100 mt-1 d-flex flex-column justify-end">
      <ChatContent />
    </div>
    <ChatInput class="chat__input justify-self-end" />
  </div>
</template>

<script setup lang="ts">
import ChatInput from '@/components/chat-single/ui/chat-input.vue';
import ChatHeader from '@/components/chat-single/ui/chat-header.vue';
import ChatContent from '@/components/chat-single/chat-content.vue';
</script>

<style scoped>
.chat {
  height: calc(100vh - 56px); /* Занимаем всю высоту экрана */
}

.chat__header {
  flex-shrink: 0; /* Шапка не сжимается */
}

.chat__content {
  flex-grow: 1; /* Занимает всё доступное пространство */
  overflow-y: auto; /* Добавляем скролл по оси Y */
}

.chat__input {
  flex-shrink: 0; /* Footer не сжимается */
}
</style>
