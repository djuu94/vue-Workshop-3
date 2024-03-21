<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user-details', params: { id: user.id }}">
          {{ user.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    users.value = await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>

<style scoped>

</style>