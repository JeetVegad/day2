<template>

       <div class="ms-4">
        <h1>Login</h1>
        <label>Username : </label>
        <input class="form-control" name="usernm" type="text" v-model="user" > <br>
        <label>Password  :  </label>
        <input class="mt-3  form-control" name="ps" type="text" v-model="pass"><br>
        <button @click="check"  class=" rounded p-1 px-3  text-white bg-success mt-2">Login</button>
        <p class="text-danger mt-3 ms-5">{{res}}</p>
        <p class="text-success ms-5">{{res1}}</p>
        </div>
</template>
<script>
export default {
        data(){
            return{
                user:'',
                pass:'',
                res:'',
                res1:'',
                
            }
        },
        methods:{
            check:function (){
                var exp= 'admin';
               if (this.user == '') {
                this.res = "Enter valid username";
                } else if (this.pass == '') {
                this.res = "Enter valid  password";
                } else if (this.user == exp && (this.pass)==exp) {
                this.res1 = "You are Login succesfully!!"
                this.res="";
                } else {
                this.res = "Enter valid user name or password"
                this.res1="";
                }
                        }
                    }
}

</script>
<style scoped>
      @import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>