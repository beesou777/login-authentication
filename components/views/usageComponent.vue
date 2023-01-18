<template>
    <div class="container pt-4">
      <h1 class="text-center py-5">See how businesses use Dukaan</h1>
      <div class="row">
        <div class="col-3 card border-0" v-for="(data,index) in cardData" :key="index">
            <img :src="data.image" style="width:100%">
            <hr>
            <div class="bg-light py-3">
                <h5>{{ data.title }}</h5>
                <p class="text-muted fs-6">{{ data.category }}</p>
            </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const cardData = ref([
    {image:'/src/assets/img/usage-1.webp',title:'VU Store',category:'ELECTRONICS'},
    {image:'/src/assets/img/usage-2.webp',title:'VU Store',category:'ELECTRONICS'},
    {image:'/src/assets/img/usage-3.webp',title:'VU Store',category:'ELECTRONICS'},
    {image:'/src/assets/img/usage-4.webp',title:'VU Store',category:'ELECTRONICS'},
])
</script>

<style scoped>
.border-0{
    box-shadow: 0 0 2px 0 rgb(223, 216, 216);
}
</style>