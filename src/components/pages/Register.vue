<script>
    import axios from "axios"
    
 
    
    export default {
        methods: {
            Login(){
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.user)
                };
                fetch("http://localhost:3000/register", requestOptions)
                    .then(response => response.json())
                    .then(data =>{
                        this.$router.push({name:'Login'})
                        //(console.log(data))
                    });
                    
                },
            getValues(){
                //console.log(this.user) 
            }
        },
        data() {
            return {
                user: {
                    username: '',
                    email: '',
                    password: '',
                }
                
            }
        }
        
    }
    
    
</script>


<template>

    <div class="Login grid place-items-center grid-cols-1 mt-11">
        <div class="w-full place-items-center text-center max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="POST" @submit.prevent="Login()">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                    <input type="text" v-model="user.username" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" v-model="user.email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" v-model="user.password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                </div>
                
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Already registered? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Sign in</a>
                </div>
            </form>
        </div>
        
    </div>
    

    
</template>

<style scoped>
    .Login{
        margin-top: 100px;
    }
</style>