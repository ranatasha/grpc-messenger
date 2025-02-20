<template>
  <v-menu
      v-model="menu"
      open-on-hover
      location="end"
  >
    <template v-slot:activator="{ props }">
      <div
          v-bind="props"
          class="d-flex flex-column align-center"
      >
        <v-icon icon="mdi-account" size="28"/>
        <div class="text-menu">Profile</div>
      </div>
    </template>

    <v-card min-width="290" color="grey-darken-1">
      <v-list>
        <v-list-item
            subtitle="@john_leider"
            title="John Leider"
            density="compact"
        >
          <template #prepend>
            <div style="width: 48px">
              <v-icon
                  icon="mdi-account-circle"
                  size="36"
              />
            </div>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <v-spacer></v-spacer>

        <v-btn
            variant="text"
            block
            @click="menu = false"
        >
          <template #prepend>
            <v-icon icon="mdi-logout" />
          </template>
          Выйти
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = ref(false);

interface Props {
  name: string,
  username: string
}

</script>

<style scoped>

</style>