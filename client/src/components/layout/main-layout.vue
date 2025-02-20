<template>
  <v-layout ref="app" class="h-100">

    <MenuPanel />

    <v-navigation-drawer
        color="grey-darken-2"
        location="start"
        name="drawer"
        permanent
    >
      <div class="d-flex justify-center align-center h-100">
        <ChatList />
      </div>
    </v-navigation-drawer>

    <v-main
        class="d-flex align-center justify-center bg-blue-grey-lighten-5 h-100"
    >
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import MenuPanel from '@/components/menu/menu-panel.vue';
import ChatList from '@/components/chat-list/chat-list.vue'
</script>

<style scoped>
</style>