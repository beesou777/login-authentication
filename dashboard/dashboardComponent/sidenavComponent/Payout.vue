<template>
  <div>
    <dashboard />
    <topnav />
    <div class="content">
      <h4 class="text-center py-4 mb-4">select your payment method</h4>
      <div class="row gap-5">
        <div class="col-2 ms-5 py-5 card  text-center">
          <div class="text-center">
            <img
              src="../../../assets/img/payout/esewa.svg"
              style="width: 70%"
              class="py-1"
            />
          </div>
        </div>
        <div class="col-2 card  py-5   text-center">
          <div class="text-center">
            <img
              src="../../../assets/img/payout/prabhu.svg"
              style="width: 70%"
              class="py-1"
            />
          </div>
        </div>  <div class="col-2  py-5  card  text-center">
          <div class="text-center">
            <img
              src="../../../assets/img/payout/imgpay.svg"
              style="width: 70%"
              class="py-1"
            />
          </div>
        </div>  <div class="col-2 card  py-5   text-center">
          <div class="text-center">
            <img
              src="../../../assets/img/payout/khalti.svg"
              style="width: 70%"
              class="py-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import dashboard from "../../dashboardMain.vue";
import topnav from "../navbar/topNav.vue";
</script>

<style scoped>
h4 {
  color: #006d8e;
}
.ms-5{
    margin-left:100px !important;

}
</style>