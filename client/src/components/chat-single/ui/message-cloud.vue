<template>
  <v-card
    class="message-cloud"
    :class="{ 'message-cloud--mine': isMine, 'message-cloud--theirs': !isMine }"
    flat
    outlined
  >
    <v-card-text class="pa-2">
      <div :class="['d-flex align-center justify-space-between', isMine ? 'flex-row-reverse' : '']">
        <div :class="['message-text', isMine ? 'ml-2' : 'mr-2']">{{ value.text }}</div>
        <div class="message-timestamp align-self-end">{{ formattedTimestamp }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Message {
  messageId: number;
  chatId: number;
  senderId: number;
  text: string;
  timestamp: Date;
}

interface Props {
  value: Message;
  isMine: boolean;
}

const props = defineProps<Props>();

// Форматируем timestamp в формат HH:MM
const formattedTimestamp = computed(() => {
  const date = new Date(props.value.timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});
</script>

<style scoped>
.message-cloud {
  max-width: 50%;
  border-radius: 12px;
  background-color: white;
  border: 1px solid #ddd; /* Граница */
}

.message-cloud--mine {
  margin-left: auto; /* Выравнивание вправо */
  background-color: #e3f2fd; /* Легкий голубой фон для своих сообщений */
}

.message-cloud--theirs {
  margin-right: auto; /* Выравнивание влево */
}

.message-text {
  word-wrap: break-word;
  white-space: pre-wrap;
}

.message-timestamp {
  font-size: 0.75rem;
  color: #666;
  margin-left: 8px; /* Отступ между текстом и временем */
}
</style>