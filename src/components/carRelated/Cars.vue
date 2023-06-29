<script setup>
import {carStore} from '../../stores/counter'
const cars = carStore()

    cars.getCars()
</script>


<template>
    <div v-if="cars.cars">
        <div v-for="item in cars.cars" class="grid grid-cols-1 place-items-center">
            <div  class="item cursor-pointer m-5 p-5 bg-green-200 border text-black hover:shadow-xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <router-link :to="{name:'CarInfo', params:{id:item.id}}">
                    <div>Make: {{ item.make }}</div>
                    <div>Model: {{ item.model }}</div>
                    <div>Year: {{ item.year }}</div>
                </router-link>
            </div>
        </div>
    </div>
    
    
</template>

<style scoped>
    .item{
        width: 80%;
        transition: 0.5s;
    }
</style>