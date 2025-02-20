<template>
  <div class="d-flex flex-column w-100 h-100">
    <TextfieldSearch class="pa-2" v-model:value="searchValue"/>
    <v-list class="h-100" lines="two" density="compact">
      <v-list-item
        v-for="chat in filteredChats"
        :key="chat.chatId"
        :subtitle="chat.lastMessage"
        :title="chat.participants.find(p => p.userId !== user.userId)?.name"
        prepend-icon="mdi-account"
        class="border"
        @click=""
      >
        <template #append>
          <div class="message-timestamp">{{ formattedTimestamp(chat.timestamp) }}</div>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  ref
} from "vue";
import TextfieldSearch from "@/components/chat-list/ui/textfield-search.vue";
import { Chat } from "@/components/chat-list/model/Chat";
import { useUserService } from "@/services/user-service/user-service";
import { User } from "@/components/chat-list/model/User";

const chats = ref<Chat[]>([
  {
    chatId: 1,
    participants: [{
      userId: 2,
      username: 'ann_smith',
      name: 'Ann Smith',
    },{
      userId: 1,
      username: 'john_leider',
      name: 'John Leider',
    }],
    lastMessage: 'Привет) Хочу уточнить, свободен ли ты завтра?',
    timestamp: new Date(2025, 1, 19, 16, 22, 0),
  },
  {
    chatId: 2,
    participants: [{
      userId: 1,
      username: 'john_leider',
      name: 'John Leider',
    },{
      userId: 3,
      username: 'mitchel_watson',
      name: 'Mitchel Watson',
    }],
    lastMessage: 'Привет) Пойдешь завтра на пары?',
    timestamp: new Date(2025, 1, 19, 12, 19, 0),
  }
]);
const getUserService = useUserService();
const userService = getUserService();

const user = userService.user;

// Форматируем timestamp в формат HH:MM
const formattedTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

interface Chat {
  chatId: number;
  participants: User[];
  lastMessage: string;
  timestamp: Date;
}

const searchValue = ref('');

const filteredChats = computed(() => {
  return chats.value.filter(chat => chat.participants.some(p => p.username.toLowerCase().includes(searchValue.value.trim().toLowerCase()) || p.name.includes(searchValue.value.trim().toLowerCase())))
})
</script>

<style scoped>
.message-timestamp {
  font-size: 0.75rem;
}
</style>