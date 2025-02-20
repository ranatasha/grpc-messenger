<template>
  <v-list lines="three">
    <v-list-item
      v-for="user in userControls"
      :key="item.value"
      :subtitle="item.subtitle"
      :title="item.title"
    ></v-list-item>
  </v-list>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>