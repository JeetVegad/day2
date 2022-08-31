<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      msg:''
    }
  },
  methods:{
    login(){
      if(this.username=="admin" && this.password=="admin123")
      localStorage.setItem("user",this.username);
      if(localStorage.getItem("user")){
        this.msg = "Login Successfully!!!!"
      }else{
        this.msg = "Login Failed"
      }
    }
    
  }
}
</script>

<template>
  <main>
          <input type="text" v-model="username" />
      <input type="text" v-model="password" />
      <button type="button" @click="login()">Submit</button>
   <h1>Home</h1>
   <p1>{{ msg }}</p1>
  </main>
</template>
