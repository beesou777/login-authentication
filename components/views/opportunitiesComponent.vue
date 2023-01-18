<template>
  <div class="container-fluid pb-4">
    <div class="container">
      <div class="text-center">
      <h2 class="py-5">
      Endless opportunities for growth with an entire platform behind you.
    </h2>
   
    <div class="row">
      <div
        class="bg-light col-lg-3 col-md-6 col-sm-12"
        v-for="(data, index) in cardData"
        :key="index"
      >
        <div>
          <img
          class="py-4"
            :src="data.image"
            style="width: 20%"
          />
        </div>
        <h5 class="fw-semibold fs-4">{{ data.title }}</h5>
        <p class="text-muted fw-semibold " style="font-size:1.1rem">{{ data.description }}</p>
      </div>
    </div>
   </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";

const cardData = ref([
  { 
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },
  {
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },
  {
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },
  {

    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },
  {
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },
  {
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },{ 
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },{ 
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },{ 
    image:'/src/assets/img/shipping.svg',
    title: "Payment Gateway Integrations",
    description:
      "Get more sales, by offering seamless and easy payment options on your online store with Dukaan.",
  },
]);


</script>

<style scoped>
.bg-light{
  background:#fff !important;
  border-radius: 8px;
  height: 260px;
  width: 355px;
}
.text-center{
  margin:1rem 1rem !important;
}
.row{
  margin:0; 
}
</style>