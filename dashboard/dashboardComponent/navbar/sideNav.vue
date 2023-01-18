<template>
  <div class="navbar nav flex-column justify-content-start float-start">
    <div class="brand rounded-1 text-dark"><h1 v-if="authStore.userDetails">{{ authStore.userDetails.username }}</h1></div>
    
    <div class="container-fluid">
      <ul>
        <li class="p-2"><img src="@/assets/img/sidebar/home.svg" /><RouterLink to="/dash">home</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/order.svg" /><RouterLink to="/dash/order" href="#">orders</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/payout.svg" /><RouterLink to="/dash/product" href="#">products</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/payout.png" /><RouterLink to="/dash/payout" href="#">payout</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/tool.svg" /><RouterLink to="/dash/tool" href="#">tools</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/discount.svg" /><RouterLink to="/dash/discount" href="#">discount</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/appearance.svg" /><RouterLink to="/dash/apperance" href="#">apperance</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/plugins.svg" /><RouterLink to="/dash/plugin" href="#">plugins</RouterLink></li>
        <li class="p-2"><img src="@/assets/img/sidebar/blog.svg" /><RouterLink to="/dash/blog" href="#">blogs</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/stores/user_store";
import {watchEffect} from 'vue'

const authStore = useAuthStore()

watchEffect(() => {
  console.log(authStore.auth_User)
  if(authStore.auth_User) {
    authStore.fetchUserDetails()
  }
})

</script>
<style scoped>
.navbar {
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #004C6C;
    height: 1024px !important;
    width: 15.4%;
}
.brand {
  color: #0090b2 !important;
  background: #fff;
  border: 1px solid #fff;
  padding: 0 2rem;
  margin: 1.4rem 0.9rem 1rem 0;
  height: 1.9rem;
}
.brand h1 {
  font-size: 1.5rem;
}
li a {
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
}ul{
    padding: 0 0 0 .5rem !important;
}
a{
  color:#fff !important;
}
</style>