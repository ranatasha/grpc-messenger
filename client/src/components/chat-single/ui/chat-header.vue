<template>
  <v-app-bar
    class="chat__header-app-bar rounded-xl"
    elevation="0"
    rounded-md
    height="56"
    color="grey"
  >
    <template #prepend>
      <v-list-item title="John Dole" subtitle="@john_dole">
        <template #prepend>
          <div style="width: 55px">
            <v-icon
              icon="mdi-account-circle"
              size="36"
              color="white"
            />
          </div>
        </template>
      </v-list-item>
    </template>
    <template #append>
      <v-menu
        v-model="menu"
        open-on-click
        location="bottom"
        offset="2"
      >
        <template #activator="{ props }">
          <v-btn
            icon="mdi-dots-horizontal"
            v-bind="props"
          />
        </template>

        <v-btn
          variant="flat"
          text="Delete chat"
          class="text-none"
          elevation="1"
          rounded
          density="default"
          @click="menu = false"
        >
          <template #append>
            <v-icon icon="mdi-delete" />
          </template>
        </v-btn>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);
</script>

<style scoped>
</style>