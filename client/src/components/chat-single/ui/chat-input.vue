<template>
    <div class="d-flex align-center">
      <v-textarea
        v-model="text"
        variant="outlined"
        placeholder="Enter а new message..."
        color="grey-darken-1"
        rows="1"
        auto-grow
        max-rows="4"
        hide-details
        rounded
        clearable
      >
        <template #prepend-inner>
          <v-icon
            v-if="!text"
            icon="mdi-pen"
            color="grey-darken-1"

          />
        </template>
      </v-textarea>
      <v-btn
        icon
        :disabled="!text"
        :ripple="false"
        variant="flat"
        color="grey-darken-1"
        class="ml-2 pl-1"
      >
        <v-icon icon="mdi-send" />
      </v-btn>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref('');
</script>

<style scoped>
:deep(.v-field) {
  background-color: #FFF;
  border-radius: 24px;
}
</style>