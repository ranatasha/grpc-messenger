<template>
  <v-text-field
    v-model="value"
    variant="outlined"
    :placeholder="props.placeholder || `User's name...`"
    prepend-inner-icon="mdi-account-search-outline"
    color="grey-darken-1"
    hide-details
    rounded
    clearable
  />
</template>

<script setup lang="ts">
const value = defineModel('value');

interface Props {
  placeholder?: string;
}
const props = defineProps<Props>();
</script>

<style scoped>

</style>