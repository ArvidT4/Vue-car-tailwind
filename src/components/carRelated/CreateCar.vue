<script>

export default{
    methods: {
            create(event){
                if(this.car.year>1950&&this.car.year<2023){

                let formData = new FormData();
                formData.append('make',this.car.make)
                formData.append('model',this.car.model)
                formData.append('year',this.car.year)
                formData.append('img', this.car.image) 
                const requestOptions = {
                    method: "POST",
                    headers: { 
                        "id": $cookies.get("sessionID") 
                    },
                    body:  formData
                };
                fetch("http://localhost:3000/createCar", requestOptions)
                    .then(response => response.json())
                    .then(data =>{
                        if(data.mes!="user not found"){
                            this.$router.push({name:'Home'})
                        }
                        //(console.log(data))
                    });
                    
                }
                else{
                    alert("enter a valid year")
                }
            },
            getImage(event){
                
                this.car.image=event.target.files[0]
                //console.log(this.car.image)
            }
        },
    data(){
        return{
            car:{
                make:"",
                model:"",
                year:"",
                image:""
            }
        }
    }
}
</script>



<template>

<div class="Login grid place-items-center grid-cols-1 mt-11">
        <div class="w-full place-items-center text-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="POST" @submit.prevent="create">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Create a car</h5>
                <div>
                    <label for="make" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Make</label>
                    <input type="make" v-model="car.make" name="make" id="make" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="make" required>
                </div>
                <div>
                    <label for="model" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Model</label>
                    <input type="model" v-model="car.model" name="model" id="password" placeholder="model" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                </div>
                <div>
                    <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                    <input type="text" v-model="car.year" name="year" placeholder="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                </div>
                <div>
                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                    <input type="file" @change="getImage"  name="image" placeholder="image" accept=".jpg, .jpeg, .png" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                </div>
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            </form>
        </div>
        
    </div>
</template>