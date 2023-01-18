<template>
  <section class="background">
    <div class="container py-3 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong mb-5" style="border-radius: 1rem">
            <div class="card-body">
              <h3 class="text-left">
                <img src="../../assets/img/ecom_logo.png" style="width: 20%" />
              </h3> 
              <!-- <p v-show="user" class=" border rounded text-danger border-danger py-3  text-center bg-danger bg-opacity-10  ">username feild cannt be empty</p> -->
              <h5 class="pb-3">Login</h5>
              <form>
                <div class="form-outline mb-4">
                  <p for="username" style="padding: 0.01rem; margin-top: 0.5rem" >
                    enter your username
                  </p>
                  <input v-model="username" type="username" id="username" class="form-control form-control-lg form-label" style="border: 1px solid #d6cfcf"/>
                </div>
                <div
                  class="form-outline mb-4"
                  :class="[isLogin ? 'hide' : 'show']">
                  <p :class="[isLogin ? 'hide' : 'show']" class="dark password-label" for="label1" style="padding: 0.1rem; margin-top: 0.5rem">
                    Password
                  </p>
                  <input  v-model="password" type="password" autocomplete="off" id="label1" class="form-control form-control-lg password-box" style="border: 1px solid #d6cfcf" />
                </div>
              </form>
              <button
                @click="isToggle"
                :class="{ disabled: isDisabled }" :disabled="isDisabled" class="btn btn-lg btn-block" type="submit"
                style=" background: var(--primary-color); color: #fff; padding: 14px 1rem !important;" >
                {{ isLogin ? "login" : "get Started" }}
              </button>
              <div class="divider d-flex align-items-center my-4">
                <p
                  class="text-center mx-3 mb-0 text-muted py-2"
                  style="font-size: 0.8rem"
                >
                  or get started with
                </p>
              </div>
              <div class="d-flex justify-content-center" style="gap: 1rem">
                <button class="mb-2 login-btn" type="submit">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                    class="social-login-icon"
                  />
                  Google
                </button>
                <button class="mb-2 login-btn" type="submit">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
                    class="social-login-icon"/>
                  Facebook
                </button>
              </div>
              <p
                class="text-muted fs-5 pt-4"
                style="font-size: 0.7rem !important; letter-spacing: 0.8px">
                By continuing, you agree to our
                <a href="#" style="color: #333"> <u> Term of use</u> </a> and
                <a href="#" style="color: #333"><u>Privacy Policy</u></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
<script>
import { gsap, TimelineLite } from "gsap";
import { ref } from "vue";
import { useAuthStore } from "../../stores/user_store";

export default {
  setup() {
    const isLogin = ref(true);
    const username = ref("");
    const password = ref("");
    const correct = ref(false);
    const user = ref(false);
    const userStore = useAuthStore();


    async function isToggle(e) {
      gsap.registerPlugin(TimelineLite);
      var tl = new TimelineLite();
      if (this.isLogin) {
        this.isLogin = false;
        tl.fromTo(".hide", { height: 0 }, { height: "auto", duration: 0.8 }),
          tl.to(".password-box", { opacity: 1, dutaion: 0.3 }),
          tl.to(".password-label", { opacity: 1, dutaion: 0.3 });
      }
      if (e.target.innerText === "Get Started") {
        if (this.username != "" && this.password != "") {
          await this.userStore
            .login(this.username, this.password)
            .catch((error) => console.log(error))
          }
          
      }
    }
    return {isLogin,isToggle,username,password,correct,user,userStore,fetch};
  },
  computed: {
    isDisabled() {
      if (this.username.length >= 5) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style>
@import "@/assets/styles/style.css";
</style>
