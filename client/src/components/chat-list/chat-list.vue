<template>
  <div class="d-flex flex-column w-100 h-100">
    <TextfieldSearch class="pa-2" v-model:value="searchValue"/>
    <v-list class="h-100" lines="two" density="compact">
      <v-list-item
        v-for="chat in filteredChats"
        :key="chat.chatId"
        :subtitle="chat.lastMessage"
        :title="chat.participants.find(p => p.userId !== user.userId)?.name || 'Избранное'"
        :prepend-icon="chat.participants.find(p => p.userId !== user.userId) ? 'mdi-account' : 'mdi-bookmark'"
        class="border"
        @click="onClickChat(chat.chatId)"
      >
        <template #append>
          <div class="message-timestamp">{{ timestampAdapter(chat.timestamp) }}</div>
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
import { Chat } from "@/types/chat";
import { useUserService } from "@/services/user-service/user-service";
import { formatToClientChat } from "@/adapters/client-chat-adapter";
import { timestampAdapter } from "@/adapters/timestamp-adapter";
import {
  useRoute,
  useRouter
} from "vue-router";

const getUserService = useUserService();
const userService = getUserService();

const user = userService.user;

const chats = ref<Chat[]>([
  {
    chatId: 1,
    lastMessage: "Reminder to call to the department",
    timestamp: Date.now(),
    participants: [
      {
        userId: 1, username: "john_leider", name: "John Leider",
      },
    ]
  },
  {
    chatId: 2,
    lastMessage: "Hello, Jane! I am going to plan our meeting",
    timestamp: Date.now(),
    participants: [
      {
        userId: 3, username: "john_doe", name: "John Doe",
      },
      {
        userId: 1, username: "john_leider", name: "John Leider",
      },
    ]
  },
  {
    chatId: 3,
    lastMessage: "Hello, John! How are you? We should meet tommororow.",
    timestamp: Date.now(),
    participants: [
      {
        userId: 2, username: "jane_smith", name: "Jane Smith"
      },
      {
        userId: 1, username: "john_leider", name: "John Leider"
      },
    ]
  }
]);

const searchValue = ref('');

const clientChats = computed(() => {
  return formatToClientChat(chats.value, user.userId);
});

const filteredChats = computed(() => {
  return clientChats.value.filter(chat => chat.sender?.username.toLowerCase().includes(searchValue.value.trim().toLowerCase()) || chat.sender?.name.includes(searchValue.value.trim().toLowerCase()));
});

const router = useRouter();
const route = useRoute();

const onClickChat = (chatId: number) => {
  // Если уже находимся на странице этого чата (повторно кликнули на чат) - нужно этот чат скрыть и открыть emptyView
  // поэтому передаем null
  if (+chatId === +route.params.id) {
    router.push({ name: 'chatList' });
  } else {
    router.push({ name: 'chatPage', params: { id: chatId }});
  }
}
</script>

<style scoped>
.message-timestamp {
  font-size: 0.75rem;
}
</style>