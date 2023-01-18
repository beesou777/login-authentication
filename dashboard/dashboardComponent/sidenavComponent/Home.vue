<template>
    <div>
        <dashboard/>
        <topnav/>
       <div class="content text-center align-items-center pt-4">
        <h3 class="fs-4 pe-5">complete your store setup</h3>
        <div class="row gap-5 container mt-5 lh-base">
            <div class="card border-3 border-primary rounded-0 col-3 text-center">
                <div class="text-end mt-3 me-3">
                    <img src="../../../assets/img/home-img/tick.png" alt="">
                </div>
                <div class="text-center mb-2">
                    <img src="../../../assets/img/home-img/visit.svg" class="ms-3 mt-2" style="width:23%"  />
                </div>
                <h6 class="mb-0">congratulations</h6>
                <p class="text-muted p-2">Your e-commerce store is 
live now.</p>
                    <a href="#" class="mb-4">Visit store</a>
            </div>
            <div class="card border-3 border-primary rounded-0 col-3 text-center">
                <div class="text-end mt-3">
                    <img src="../../../assets/img/home-img/circle.svg" alt="">

                </div>
                <div class="text-center mb-2">
                    <img src="../../../assets/img/home-img/box.svg" class="ms-3 mt-2" style="width:23%"  />
                </div>
                <h6 class="mb-0">upload your first product</h6>
                <p class="text-muted p-2">Add your product to the store and start selling</p>
                    <div class="text-center mb-4">
                       <button class="mb-4 border-0 rounded-2 mb-5 py-2 w-50"> <RouterLink to="/dash/product" class="text-white text-decoration-none"  >Visit store</RouterLink></button>
                    </div>
            </div>
            <div class="card border-3 border-primary rounded-0 col-3 text-center">
                <div class="text-end mt-3">
                    <img src="../../../assets/img/home-img/circle.svg" alt="">
                </div>
                <div class="text-center mb-2">
                    <img src="../../../assets/img/home-img/payment.svg" class="ms-3 mt-2" style="width:23%"  />
                </div>
                <h6 class="mb-0">setup payment</h6>
                <p class="text-muted p-2">your E-Commerce store is live now</p>
            </div>
        </div>
       </div>
    </div>
</template>
<script setup>
import dashboard from '../../dashboardMain.vue'
import topnav from '../navbar/topNav.vue'
</script>

<style scoped>
button{
    background:#006D8E !important;
}
h6{
    color: #146eb4;
}
.fs-4{
    font-size: 1.6rem !important;
    color: #146eb4;
}
.row{
    padding: 0 0rem 0 5.6rem;
    width: 80% !important;
}
.gap-5{
    gap:5.9rem !important;
}
span{
    height: 20px !important;
    width: 20px !important;
    border: 2px solid #ccc;
    border-radius: 50%;
    float:right;
    background: #fdfdfd !important;
}
</style>