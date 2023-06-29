<script>
import { all } from 'axios';
import {useRoute} from 'vue-router'
import {ref} from 'vue'

    export default{
        methods:{
            logout(){
                $cookies.remove('test')
                const requestOptions = {
                    method: "POST",
                    headers: { "id": $cookies.get("sessionID") },
                };
                fetch("http://localhost:3000/logout", requestOptions)
                    .then(response => response.json())
                    .then(data =>{
                        //(console.log(data))
                        let allCookies=this.$cookies.keys()
    
                        allCookies.forEach(el=>{

                            this.$cookies.remove(el)
                        })
                        this.$router.push({name:'Start'})
                    });
                    
                },
            allCooks(){
                let allCookies=this.$cookies.keys()
                //console.log(allCookies)
            }
        },
        data(){
            return{
                bool:ref(false)
            }
        },
        watch:{
        $route(to,from){
            //console.log("to",to.name);
            //console.log("from", from)
            if(to.name==="Home"||to.name==="CarInfo"||to.name==="createCar"){
                //console.log("dookie")
                this.bool=true
            } 
            else this.bool=false
            
        }
    }
    }

</script>

<template >
    <div v-if="this.bool">
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/loggedIn" class="flex items-center">
                    
                    <span class="self-center text-blue-700 text-2xl font-semibold whitespace-nowrap dark:text-white">Arvids bilar</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/createCar" class="block py-2 pl-3 pr-4 mt-2 hover:text-blue-600 text-black border-sm border-grey-400-sm bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Create car</a>
                    </li>
                    <li>
                        <a href="/LoggedIn" class="block py-2 pl-3 pr-4 mt-2 hover:text-blue-600 text-black border-sm border-grey-400-sm bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a @click="logout" href="#" class="block py-2 pl-3 pr-4 mt-2 hover:text-blue-600 text-black border-sm border-grey-400-sm bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    

</template>