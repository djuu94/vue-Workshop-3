<template>
    <div v-if="user">
      <h2>User Details</h2>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Loading user details...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const user = ref(null);
  const route = useRoute();
  
  onMounted(async () => {
    const userId = route.params.id;
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      user.value = await response.json();
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  });
  </script>
  
  <style scoped>
 
  </style>