<script setup>
import Navbar from '../Navbar.vue';
import {useRoute, useRouter} from "vue-router"
import {carStore, editStore} from '../../stores/counter'
import CheckCookie from '../CheckCookie.vue';


    const route = useRoute();
    const router = useRouter();
    const cars = carStore()
    const edit = editStore()
    let id = route.params.id
    //console.log(cars)
    let car = cars.getCar(id) 

    let url = "http://localhost:3000/"+car.image

    function removeCar(id){
        cars.deleteCar(id)
        router.push({name:'Home'})
    }
    function editCar(){
        cars.editCar(car)
        edit.edit()
    }
   
</script>

<template>
    <CheckCookie></CheckCookie>
   <!--  <Navbar></Navbar> -->
    <div v-if="car">
        <div class="grid grid-cols-1  place-items-center">
            <div class="grid ipad:max-w-2xl ipad:grid-cols-4 grid-cols-3 place-items-center item ipad:p-2 ipad:m-8 text-back text-center bg-white  shadow-xl border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <div class="col-span-3  ipad:mt-0">
                    <div class="img">
                        <img class="rounded-lg border border-black" v-bind:src="url" src=""/>
                    </div>
                    
                </div>
                <div class="ipad:col-span-1 col-span-3 ipad:pl-2 pl-0">
                    <div class="grid grid-cols-2 place-items-center border-b border-gray-300">
                        <button @click="removeCar(car.id)" class="m-2">
                            <svg class="w-6 h-6 text-gray-800 hover:text-gray-400 ease-in duration-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                            </svg>
                        </button>
                        <button>
                            <svg @click="edit.edit" class="w-6 h-6 text-gray-800 hover:text-gray-400 ease-in duration-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
                                <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
                            </svg>
                        </button>
                    </div>
                    <div v-if="!edit.editBool">
                        <h6 class="mb-5 ipad:mb-1 text-2xl ipad:text-1xl font-bold tracking-tight border-b border-gray-300 dark:text-white">Information</h6>
                        <div class="ipad:p-1 grid ipad:grid-cols-1 grid-cols-3">
                            <h6 class="mb-5 text-1xl font-bold tracking-tight  dark:text-white">Make: {{car.make}}</h6>
                            <h6 class="mb-5 ml-4 mr-4 text-1xl font-bold tracking-tight  dark:text-white">Model: {{car.model}}</h6>
                            <h6 class="mb-5 text-1xl font-bold tracking-tight  dark:text-white">Year: {{car.year}}</h6>
                        </div>
                    </div>
                    
                    <div v-else-if="edit.editBool">
                        <h6 v-if="!edit.editBool" class="mb-5 ipad:mb-0 text-2xl ipad:text-1xl font-bold tracking-tight border-b border-gray-300 dark:text-white">Information</h6>
                        <h6 v-else-if="edit.editBool" class="mb-5 ipad:mb-0 text-2xl ipad:text-1xl font-bold tracking-tight border-b border-gray-300 dark:text-white">Edit car</h6>
                        
                        <div class="ipad:p-1 grid  ipad:grid-cols-1 grid-cols-3 place-items-center ipad:place-items-">
                            <div>
                                <label for="make" class="block text-sm font-medium text-gray-900 dark:text-white">Make</label>
                                <input type="text" v-model="car.make"  name="make" class="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required>
                            </div>
                            <div>
                                <label for="model" class="block text-sm font-medium text-gray-900 dark:text-white">Model</label>
                                <input type="text" v-model="car.model" name="model" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required>
                            </div>
                            <div>
                                <label for="year" class="block text-sm font-medium text-gray-900 dark:text-white">Year</label>
                                <input type="text" v-model="car.year" name="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required>
                            </div>
                            <div class="ipad:col-span-1 col-span-3">
                                <button @click="editCar()" class="ipad:p-1 ipad:pl-3 ipad:pr-3 p-1.5 mb-3 ipad:mb-0 text-gray-900 bg-white border border-gray-300 focus:outline-none ease-in duration-200 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg block text-sm w-full mt-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">update Information</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    img{
        object-fit: cover;
        width: 490px;
        height: 300px;
    } 
    @media screen and (max-width: 500px){
        img{
            width: 400px;
        }
    }
    @media screen and (max-width: 500px){
        img{
            margin: auto;
            max-width: 400px;
            width: 100%;
            height: 100%;
        }
    }
</style>