<template>
<!--  <VotingSystem/>-->
  <router-view></router-view>
</template>

<script>

import Login from "@/components/Login.vue";
import VotingSystem from "@/components/VotingSystem.vue";

export default {
  
  name: 'App',
  components: {
    Login,
    VotingSystem
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
}
</style>
