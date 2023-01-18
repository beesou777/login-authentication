<template>
  <div>
    <sideNav/>
    <router-view/>
  </div>
</template>
<script setup>
import sideNav from "./dashboardComponent/navbar/sideNav.vue";
import { RouterLink, RouterView } from "vue-router";
</script>