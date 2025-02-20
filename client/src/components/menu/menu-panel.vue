<template>
  <v-navigation-drawer
      :rail="true"
      permanent
      color="grey-darken-3"
      rail-width="60"
      rounded="false"
  >
    <v-list-item class="pa-0 pt-2 mb-3">
      <AvatarMenu />
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav class="pa-0">
      <v-list-item value="home" class="mt-3">
        <div class="d-flex flex-column align-center">
          <v-icon icon="mdi-forum-outline" size="28"/>
          <div class="text-menu">Chats</div>
        </div>
      </v-list-item>
<!--      <v-list-item value="users" class="mt-3">-->
<!--        <div class="d-flex flex-column align-center">-->
<!--          <v-icon icon="mdi-account-group-outline" size="28"/>-->
<!--          <div class="text-menu">Users</div>-->
<!--        </div>-->
<!--      </v-list-item>-->
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import AvatarMenu from '@/components/menu/ui/avatar-menu.vue';
</script>

<style scoped>

</style>