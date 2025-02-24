<template>
  <div class="chat-content px-5">
    <div class="chat-content__messages">
      <MessageCloud
        v-for="msg in props.messages"
        :key="msg.messageId"
        :value="msg"
        :is-mine="msg.senderId === user.userId"
        :class="[
          'chat-content__message',
          msg.senderId === user.userId ? 'chat-content__message--mine' : 'chat-content__message--theirs'
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageCloud from '@/components/chat-single/ui/message-cloud.vue';
import { useUserService } from "@/services/user-service/user-service";
import { Message } from "@/types/message";

const getUserService = useUserService();
const userService = getUserService();

const user = userService.user;

interface Props {
  messages: Message[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.chat-content {
  height: 100%; /* Занимает всю доступную высоту */
  overflow-y: auto; /* Скролл, если содержимое превышает высоту */
}

.chat-content__messages {
  display: flex;
  flex-direction: column;
  padding: 8px 0; /* Отступы сверху и снизу */
}

.chat-content__message {
  margin-bottom: 8px; /* Отступ между сообщениями */
}

.chat-content__message--mine {
  align-self: flex-end; /* Ваши сообщения справа */
}

.chat-content__message--theirs {
  align-self: flex-start; /* Сообщения собеседника слева */
}
</style>