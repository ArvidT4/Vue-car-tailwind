import { ref, computed } from 'vue' 
import { defineStore } from 'pinia'
import axios from 'axios'
import {useRoute, useRouter} from "vue-router"

const CARS_LOCAL_STORAGE_KEY = 'cars'

function newToOld(a, b) {
  if (a.year < b.year)
      return 1;
  if (a.year > b.year)
      return -1;
  return 0;
  }
  function oldToNew(a, b) {
    if (a.year < b.year)
        return -1;
    if (a.year > b.year)
        return 1;
    return 0;
    }
    function alphaSort(a, b) {
      if (a.make < b.make)
          return -1;
      if (a.make > b.make)
          return 1;
      return 0;
      }

export const editStore = defineStore('editBool',{
  state:()=>({editBool:false}),
  actions:{
    edit(){
      if(this.editBool){
        this.editBool=false
      }
      else this.editBool=true
    }
  }

})

export const sortStore = defineStore('sortBool',{
  state:()=>({sortBool:false}),
  actions:{
    sorted(){
      if(this.sortBool){
        this.sortBool=false
      }
      else this.sortBool=true
    }
  }

})
const getLocalStorage = () => {
  const cars = localStorage.getItem('cars')

  return cars ? JSON.parse(cars) : []
}
export const carStore = defineStore('cars', {
  state: ()=>({
    cars: getLocalStorage(),

    
  }),
  getters:{
    
  
    
  },
  actions: {
    sortAlphabetical(){
      return this.cars.sort(alphaSort);
    },
    sortCarYear(sortNew){
      
      if(sortNew){
        return this.cars.sort(oldToNew);
      }
      else return this.cars.sort(newToOld)
      
  
    },
    async editCar(car){
      const res = await axios({
        method: 'put',
        url: "http://localhost:3000/updateCar/"+car.id,
        headers:{
          "id": $cookies.get("sessionID")
        },
        data: {
            "make":car.make,
            "model":car.model,
            "year":car.year
        }
      });
      //console.log(res)
      
    },
    async deleteCar(id){
      let res = await axios.delete("http://localhost:3000/deleteCar/"+id,{
        headers:{
          "id": $cookies.get("sessionID")
        }
        
      })
      //console.log(res)
    },
    async getCars() {
        this.cars=[]
        let res = await axios.get("http://localhost:3000/cars",{
            headers:{
                "id": $cookies.get("sessionID")
            }
        });
        //console.log(res.data)
        if(res.data!="not logged in"){
            res.data.forEach(element => {
                this.cars.push(element)
            });
            //console.log(this.cars);
            localStorage.setItem('cars', JSON.stringify(this.cars))
        }
      
    },
    getCar(id){
      return this.cars.find((car)=>car.id==id)
    }
    
  }
  

})
