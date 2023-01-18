<template>
  <div>
    <dashboard />
    <productnav />
    <div class="row gap-2 container">
      <div
        class="col-7 container py-2 payment"
        style="margin-right: 10px !important; margin-left: 10px !important"
      >
        <h4>product information</h4>
        <label>Product Name :<span class="req"> * </span> </label>
        <input type="text" placeholder="Enter product name" required />
        <label>Product Category :<span class="req"> * </span></label>
        <input type="text" placeholder="Select category" required />
        <div class="row">
          <div class="col-6 position-relative">
            <label>Price :<span class="req"> * </span></label>
            <input
              style="padding-left: 3.3rem !important"
              type="text"
              placeholder="Enter price"
              required
            />
            <button
              type="submit"
              class="
                position-absolute
                top-50
                start-0
                py-2
                border-0
                rounded-1
                fw-bolder
                p-2
                bg-transparent
              "
              style="margin: -0.4rem 0 0 1.2rem !important"
            >
              NRs
            </button>
          </div>
          <div class="col-6 position-relative">
            <label>Discounted Price : </label>
            <input
              style="padding-left: 3.3rem !important"
              type="text"
              placeholder="Enter discount"
              required
            />
            <button
              class="
                position-absolute
                top-50
                start-0
                py-2
                border-0
                rounded-1
                bg-transparent
                ms-4
                fw-bolder
                p-2
              "
              style="margin: -0.4rem 0 0 1.2rem !important"
            >
              NRs
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <label>Product Unit :<span class="req">*</span></label>
            <div class="d-flex">
              <input
                type="number"
                placeholder="1"
                value="piece"
                class="col-6"
                required
              />
              <p class="text-dark fw-bolder mt-4 fw-semibolder ms-4 col-6">
                per piece
              </p>
            </div>
          </div>
        </div>
        <div class="textarea" style="width:90%;">
          <h6>product description</h6>
          <QuillEditor theme="snow" toolbar="#custom-toolbar" style= "height: 200px;">
           <template #toolbar style="width:90%;overflow-y:scroll">
            <div id="custom-toolbar">
                <button class="ql-bold bg-transparent"></button>
                <button class="ql-italic bg-transparent"></button>
                <button class="ql-underline bg-transparent"></button>
                <button class="ql-list bg-transparent" value="ordered"></button>
                <button class="ql-list bg-transparent" value="bullet"></button>
                <button class="ql-indent bg-transparent" value="-1"></button><button class="ql-indent bg-transparent" value="+1"></button>
                <select class="ql-color bg-transparent" >
                  <option value="red"></option>
                  <option value="blue"></option>
                  <option value="green"></option>
                  <option value="black"></option>
                  <option value="yellow"></option>
                  <option value="purple"></option>
                  <option value="white"></option>

                </select>
                <select class="ql-background bg-transparent" >
                  <option value="red"></option>
                  <option value="blue"></option>
                  <option value="green"></option>
                  <option value="black"></option>
                  <option value="yellow"></option>
                  <option value="purple"></option>
                  <option value="white"></option>
                </select>
                <select class="ql-font bg-transparent" >
                  <option value="monospace"></option>
                  <option value="serif"></option>
                  <option value="sanf-serif"></option>
                </select>
                <select class="ql-header bg-transparent" >
                  <option value="normal"></option>
                  <option value="3"></option>
                  <option value="4"></option>
                  <option value="5"></option>
                </select>
            </div>
           </template>
        </QuillEditor>
       <div class="d-flex flex-row mt-3 gap-2">
        <p class="text-dark">Get high quality product descriptions within seconds! </p>
        <a href="#"> Get description.</a>
       </div>
        </div>
      </div>
      <div class="col-4 mb-2">
        <div class="payment py-2 container" style="margin-left: 10px">
          <h5 class="mb-5">product media(upto 8)</h5>
          <div
            class="
              border border-3
              mb-3
              rounded-2
              w-50
              d-flex
              flex-column
              text-center
            "
          >
            <div class="text-center">
              <img
                src="../../../assets/img/product/camera.png"
                class="mt-4 py-2"
                style="width: 20%"
              />
            </div>
            <a href="#" class="text-dark fw-semibold mb-3">or add video</a>
          </div>
          <h6 class="text-dark">Recommended Size(1000px * 1000px)</h6>
        </div>
        <div class="card my-4 w-100 ms-2 payment">
          <h5 class="ms-3 py-2 vorder-2 rounded-2">Inventory</h5>
        </div>
        <div class="card my-4 w-100 ms-2 payment">
          <h5 class="ms-3 py-2 vorder-2 rounded-2">Variants</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dashboard from "../../dashboardMain.vue";
import productnav from "../navbar/productNav.vue";
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
</script>

<style scoped>
.req {
  color: red !important;
}
input {
  width: 90%;
  margin: 0.7rem 0;
  padding: 0.8rem 1rem;
  border: 2px solid #e2dddd !important;
  border-radius: 6px !important;
}
input:focus {
  outline: 2px #e2dddd !important;
}
.payment {
  background: #fafafa !important;
  border: 1px solid rgba(0, 109, 142, 0.1);
  border-radius: 6px;
}
.btn:focus{
  outline: 1px solid #e2dddd !important;
  background: #e2dddd;
}

</style>