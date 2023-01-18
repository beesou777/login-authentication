<template>
    <div>
       <h1 class="text-center fw-semibold ">
        Be it a startup or a legacy business, here’s why you need Dukaan
       </h1>
       <firstCard />
       <secondCard class="my-5"/>
       <thirdCard/>
    </div>
</template>
<script setup>
import firstCard from '@/components/views/featureCard/firstCard.vue'
import secondCard from '@/components/views/featureCard/secondCard.vue'
import thirdCard from '@/components/views/featureCard/thirdCard.vue'
</script>

<style scoped>
.text-center{
    max-width: 698px !important;
    margin:0 auto 64px !important;
    font-weight: 600 !important;
}
</style>