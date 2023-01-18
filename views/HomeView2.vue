<template>
    <div>
        <div class="background overflow">
        <div class="container">
            <NavbarComponent/>
            <landingPage/>
        </div>
        
    </div>
    <div>
        <featureComponent class="mb-4 container"/>
        <opportunitiesComponent class="bg-1"/>
        <usageComponent/>
        <userReview class="bg-1 pb-5"/>
        <footerComponent/>
    </div>
    </div>
    </template>
    
<script setup>
    import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
    import landingPage from '@/components/views/landingPage.vue'
    import featureComponent from '@/components/views/featureComponent.vue'
    import opportunitiesComponent from '@/components/views/opportunitiesComponent.vue'
    import usageComponent from '@/components/views/usageComponent.vue'
    import userReview from '@/components/views/userReview.vue'
    import footerComponent from '@/components/footer/footerComponent.vue'

    
    </script>
    <style scoped>
    .background{
        background: url('@/assets/img/banner-1.webp') no-repeat;
        background-size: cover;
    }
    .bg-1{
        background:#FEF8EB;
    }
    .overflow{
        overflow-x: hidden;
    }
    
    </style>