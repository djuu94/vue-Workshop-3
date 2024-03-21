<template> 
    <div id="app">
      <header>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/users">Users</router-link>

      </header>
  
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script lang="ts"> //json-server --watch db.json
  import { defineComponent } from 'vue';
  import HomeView from './views/HomeView.vue';
  import AboutView from './views/AboutView.vue';
  import UsersData from './views/UsersData.vue'
  import UserDetails from './components/UserDetails.vue'
  
  export default defineComponent({
    name: 'App',
    components: {
      HomeView,
      AboutView,
      UsersData,
      UserDetails
    },
  });
  </script>
  
  <style>
  /* css styles här */
  </style>

 ./components/UserDetails.vue