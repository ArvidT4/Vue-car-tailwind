<script setup>
import {carStore, sortStore} from '@/stores/counter'
const cars = carStore()
const sortState = sortStore()

function sorting(sorting){
    if(sorting){
        cars.sortCarYear(true)
    }
    else{
        cars.sortCarYear(false)
    }
    sortState.sorted()
}
//console.log(cars.sortAlphabetical())

</script>

<template>
    Sort by:
    <div class="grid grid-cols-2">
        <div><button @click="cars.sortAlphabetical()" class="border-y hover:bg-gray-200 duration-150 border-l rounded-l-lg border-gray-500 pl-5 pr-3 p-1">Make</button></div>
        <div>
            <div  v-if="!sortState.sortBool">
                <button @click="sorting(false)" class="grid grid-cols-4 border hover:bg-gray-200 duration-150 rounded-r-lg border-gray-500 pr-3 pl-2 p-1">
                    <div class="col-span-3">Year</div>
                    <div>
                        <svg class="w-3 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                        </svg>
                    </div>
                </button>
            </div>
            
            <div v-if="sortState.sortBool">
                <button @click="sorting(true)" class="grid grid-cols-4 border hover:bg-gray-200 duration-150 rounded-r-lg border-gray-500 pr-3 pl-2 p-1">
                    <div class="col-span-3">Year</div>
                    <div>
                        <svg class="w-3 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                        </svg>
                    </div>
                </button>
            </div>
            

        </div>
    </div>
    

    
</template>