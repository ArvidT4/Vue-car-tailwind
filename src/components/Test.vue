<script setup>
    import axios from "axios"
    import {carStore} from '../stores/counter'
    const cars = carStore()
    //import {useCounterStore} from '@/stores/counter'
    //const store = useCounterStore()
    /* export default {
        methods: {
            async getEvents(cars) {
                let res = await axios.get("http://localhost:3000/cars",{
                    headers:{
                        "id": $cookies.get("sessionID")
                    }
                });
                
                if(res.data!="not logged in"){
                    res.data.forEach(element => {
                        cars.push(element)
                    });
                    console.log(cars);
                }
                console.log(res.data)
                
            }
        },
        beforeMount(){
            console.log(store)
        },
        
        data() {
            return {
                cars: [],
                counter: 0,
                text: 'f',
            }
        }
        
    } */
    cars.getCars()
</script>

<template>
    <h1>ARVIDSg TEST</h1>
    {{ cars.cars }}
    <button @click="cars.getCars()">Hämta bilar</button>
    <!-- <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" @click="getEvents(cars)">Knapp</button>
    <button  @click="counter++">Add 1</button>
    <input type="text" v-model="text" @keypress="$event=>console.log($event.key)">
    <p>You typed: {{ text }}</p>
    <p>Count is: {{ counter }}</p>

    <p v-if="counter>=6">Bitches</p>
    <p v-else="counter<6">loading</p>-->
    <div v-for="item in cars.cars" class="max-w-sm m-3 p-6 bg-white border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        
        <div>
            {{ item.make }}
        </div>
        
    </div> 

    
</template>