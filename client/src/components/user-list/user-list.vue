<template>
  <div class="d-flex flex-column w-100 h-100">
    <TextfieldSearch class="pa-2" v-model:value="searchValue"/>
    <v-list class="h-100" density="compact">
      <v-list-item
        v-for="user in filteredUsers"
        :key="user.userId"
        :title="curUser.userId === user.userId ? 'Избранное' : user.name"
        :prepend-icon="curUser.userId === user.userId ? 'mdi-bookmark' : 'mdi-account'"
        class="border"
        @click="router.push({ name: 'chatPage', params: { id: 1 }});"
      />
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { useUserService } from "@/services/user-service/user-service";
import TextfieldSearch from "@/components/chat-list/ui/textfield-search.vue";
import {
  computed,
  ref
} from "vue";
import { User } from "@/types/user";
import {
  useRoute,
  useRouter
} from "vue-router";

const getUserService = useUserService();
const userService = getUserService();

const curUser = userService.user;

const searchValue = ref('');

const users = ref<User[]>([
  {
    userId: 1, username: "john_leider", name: "John Leider"
  },
  {
    userId: 2, username: "jane_smith", name: "Jane Smith"
  },
  {
    userId: 3, username: "john_doe", name: "John Doe"
  },
]);

const filteredUsers = computed(() => {
  return users.value.filter(user => user.username.toLowerCase().includes(searchValue.value.trim().toLowerCase()) || user.name.includes(searchValue.value.trim().toLowerCase()));
})

const route = useRoute();
const router = useRouter();
</script>

<style scoped>

</style>