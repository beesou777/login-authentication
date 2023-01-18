<template>
  <div class="container-fluid">
    <div class="container">
     <div class="text-center">
      <img class="pt-5" src="@/assets/img/comma.svg" alt="" />
      <h1 class="py-4">What our users say about us</h1>
      <p class="text-muted fs-5 mb-5">
        From beginners to enterprise brands, everyone loves Dukaan!
      </p>
      <div class="row" >
        <div class="bg-light col-lg-5 col-md-12 col-sm-12 me-2 p-3" v-for="(data,index) in cardData" :key="index">
          <h4 class="mb-3">{{ data.heading }}</h4>
          <p class="text-muted fw-semibold pb-5 pe-5" style="font-size:1.1rem">
           {{ data.description }}
          </p>
          <div class="d-flex gap-3 pt-4">
            <img :src="data.image" />
            <div class="pt-3">
              <h5>{{ data.title }}</h5>
              <p class="text-muted fw-bolder">{{ data.post }}</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<style scoped>
.card{
    text-align: left !important;
    padding: 3rem !important;
}
.bg-light{
    background:#fff !important;
  border-radius: 8px;
  min-height: 500px;
  max-width: 600px;
  margin: 1rem 1rem;
  text-align: left !important;
}
</style>
<script setup>
import { ref } from "vue";

const cardData = ref([
  {
    image: "/src/assets/img/profile.svg",
    title: "tracy mcquarrie",
    post: "store owner",
    description:"Get a hold of this while you can!! The amount of dedication and grit MyDukaan team possess is commendable. They have been shipping features at lightspeed. Something which further strengthens the belief in the product. Really excited to collaborate with Dukaan and take this product global. Kudos!! ",
    heading:" “Dukaan means Blazing Fast Speed ” "
  },
  {
    image: "/src/assets/img/profile.svg",
    title: "tracy mcquarrie",
    post: "store owner",
    description:"Get a hold of this while you can!! The amount of dedication and grit MyDukaan team possess is commendable. They have been shipping features at lightspeed. Something which further strengthens the belief in the product. Really excited to collaborate with Dukaan and take this product global. Kudos!! ",
    heading:" “Dukaan means Blazing Fast Speed ” "
  },
]);
</script>