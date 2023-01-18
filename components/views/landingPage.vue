<template>
  <div class="row">
    <div class="col-7">
      <h1 class="fw-bolder " style="font-size:3.5rem;padding:100px 0 2rem 0  !important;">E-commerce platform for growing businesses</h1>
      <p class="text-muted fs-5 pe-5 fw-semibold pb-4">Launch, scale and manage your business with Dukaan’s all-in-one commerce platform.</p>
      <div class="form">
        <input class="ps-4 text-muted py-2 rounded-1 border-0 text-left" type="text" placeholder="enter your email address">
        <button class="border border-0 rounded-1 fw-semibold text-light px-4">start free trials</button>
      </div>
      <p class="text-muted py-3" style="font-size:.7rem">*No credit card is required to start your 7-day free trial.</p>
      <div class="d-flex py-4">
        <p class="text-muted">also available on </p>
        <div class="img d-flex flex-row ms-3  align-items-center mb-4">
            <img src="@/assets/img/appleStore.svg" style="width:50%;margin-right: .6rem;">
            <img src="@/assets/img/playStore.svg" style="width:50%">
        </div>
      </div>
    </div>
    <div class="col-5">
        <img src="@/assets/img/hero_image.webp" style="width:180%;position:relative;right:1.5rem;">
    </div>
  </div>
</template>
<style scoped>
@import url('@/assets/styles/style.css');

.row{
    padding-top: 70px;
}
input{
    padding-right: 10rem !important;
    margin:0 1rem 0 0 ;
    padding: .8rem 5rem .8rem 1rem !important;
    width: 60%;
}
button{
    font-size: 1.1rem !important;
    padding: .7rem 1rem !important;
    font-weight: 600 !important;
}

</style>