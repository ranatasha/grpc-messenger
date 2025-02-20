<template>
  <v-app>
    <v-main>
      <component :is="layout" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import EmptyLayout from '@/components/layout/empty-layout.vue';

const route = useRoute();
const layout = computed(() => route.meta?.layout ?? EmptyLayout);
</script>

<style scoped>

</style>
