<template >
    <div class="ms-4 mt-5 ">
    <h1>Sign up</h1>
    <label class="mb-3">Name : </label><br>
    <input class="form-control" placeholder="Enter name" type="text" v-model="nam" name="nm" > <br>
    <label>PanNumber : </label><br>
    <input class="mt-3 form-control" placeholder="Enter PAN number" type="text" v-model="pan" name="pm"><br>
    <label>Address : </label><br>
    <textarea class="mt-3 form-control" placeholder="Enter Address" v-model="address" name="ad"></textarea><br>
    <button @click="display" class="rounded p-1 px-3 mb-3 text-white bg-success mt-2">Sign up</button>
    <h2>Your Entered Details :</h2>
    <p>{{detail}}</p>
</div>
</template>
<script>
export default {
    data(){
        return{
            nam:'',
            pan:'',
            address:'',
            detail:''
        }
    },
    methods:{
        display(){
          this.detail="Your name is :"+" " + this.nam+","+" "+" Your PAN number is :"+ " "+this.pan+" " +"and"+" "+" Your Address  is :"+" "+this.address;
}
    }
}
</script>
<style scoped>
  @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>