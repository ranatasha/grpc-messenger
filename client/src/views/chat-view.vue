<template>
  <div class="chat d-flex flex-column w-100 bg-blue-grey-lighten-5 pa-2">
    <ChatHeader class="chat__header justify-start ma-2"/>
    <div class="d-flex justify-center">{{ chatId }}</div>

    <div class="chat__content w-100 mt-1 d-flex flex-column justify-end">
      <ChatContent :messages="messages" />
    </div>
    <ChatInput class="chat__input justify-self-end" />
  </div>
</template>

<script setup lang="ts">
import ChatInput from '@/components/chat-single/ui/chat-input.vue';
import ChatHeader from '@/components/chat-single/ui/chat-header.vue';
import ChatContent from '@/components/chat-single/chat-content.vue';
import { useRoute } from "vue-router";
import { computed } from "vue";
import { Message } from "@/types/message";

const route = useRoute();
const chatId = computed(() => route.params.id);

const messages: Message[] = [
  {
    messageId: 1,
    chatId: 1,
    senderId: 2,
    text: 'Привет! Как дела?',
    timestamp: new Date(),
  },
  {
    messageId: 2,
    chatId: 2,
    senderId: 1,
    text: 'Привет! Все хорошо, у тебя как?',
    timestamp: new Date(),
  },
];
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
