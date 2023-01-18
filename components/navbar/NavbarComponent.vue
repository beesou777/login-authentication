<template>
    <div 
    v-bind:class="{ 'white-navbar': isNavbarWhite }"
    class="d-flex flex-wrap fixed-top container justify-content-between align-items-center">
        <div class="d-flex">
            <img src="@/assets/img/logo.svg" style="width:25%">
            <ul class="d-flex align-items-center pt-4 ms-4">
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Company</a>
                </li> <li>
                    <a href="#">Pricing</a>
                </li>
            </ul>
        </div>
        <div class="pt-2 mx-4">
            <RouterLink to="/login" class="border border-0 p-3  me-2 fs-5 fw-semibold bg-transparent">sign in </RouterLink>
            <button class="border button border-0 rounded-2  px-4 py-3 fs-6 text-light fw-semibold">start free trial </button>

        </div>
    </div>
</template>


<style scoped>
.white-navbar {
    background-color: white;
}
.button{
    font-size: 1.1rem !important;
    padding: .9rem 1.3rem !important;
    font-weight: 600 !important;
}
li a{
    font-size: 1.4rem;
    margin: 0 0 0 2rem;
}
a{
    text-decoration: none;
    color: #000 !important;
}

</style>
