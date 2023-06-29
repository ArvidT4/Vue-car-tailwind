<script setup>
import Navbar from '../Navbar.vue';
import Cars from '../carRelated/Cars.vue'
import CheckCookie from '../CheckCookie.vue';
import SortButtons from '../SortButtons.vue';
/* checkCookie()
    function checkCookie(){
        if(!$cookies.get("sessionID")){
                this.$router.push({name:'Start'})
        }
    } */
        
</script>

<template>
    <CheckCookie></CheckCookie>
    <!-- <Navbar/> -->
    <div class="grid grid-cols-8 place-items-end">
        <div class="col-span-7"><SortButtons></SortButtons></div>
    </div>
        <div class="col-span-8"><Cars></Cars></div>
        
    
    
</template>