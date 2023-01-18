import { defineStore } from "pinia";
import axios from 'axios'
import router from '@/router/index'
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('token')) || null,
    userDetails: JSON.parse(localStorage.getItem('userDetails')) || null,
  }),
  getters: {
    is_auth: (state) => !!state.authUser,
  },
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post("user_accounts/login/", { username, password });
        if (response.data) {
          this.authUser = response.data
          localStorage.setItem('token', JSON.stringify(response.data))
          this.fetchUserDetails()
          router.push('/dash/')
          toaster.success(`successfully login !!`,{position:'top'})
        }
      } catch (error) {
       toaster.error(`invalid username or password!!!`,{position:'top'})
      }
    },
    async fetchUserDetails() {
      if (this.authUser.uuid) {
        try {
          const response = await axios.get(`user_accounts/user/${this.authUser.uuid}/`)
          this.userDetails = response.data
          localStorage.setItem('userDetails', JSON.stringify(response.data));
        } catch (error) {
          console.log(error)
        }
      }
    },
    async logout() {
      localStorage.removeItem('token'),
      await router.push('/login')
    },
  }
})