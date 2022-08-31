<template>
  <div>
    <input type="text" v-model="id" placeholder="Id" />
    <input type="text" v-model="user_id" placeholder="User id" />
    <input type="text" v-model="title" placeholder="Title" />
    <input type="text" v-model="body" placeholder="Body" />
    <button type="submit" @click="add()">ADD</button>
    <table class="table  border-2">
      <caption></caption>
      <th></th>
      <tr v-for="item in info" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.user_id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
        <td>
    <button type="submit" @click="deleted(item.id)">Delete</button>

        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      id:"",
      user_id: "",
      title: "",
      body: "",
      info: [],
      token: "39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8",
    };
  },
  mounted() {
    axios
      .get("https://gorest.co.in/public/v2/posts", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then((response) => (this.info = response.data));
  },
  methods: {
    async add() {
      var obj = {
        id:this.id,
        user_id: this.user_id,
        title: this.title,
        body: this.body,
      };
      await axios.post("https://gorest.co.in/public/v2/posts", obj
      , {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
    },
    async deleted(id){
      await axios.delete(`https://gorest.co.in/public/v2/posts/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },  
      })
    }, 
  },

};
</script>

<style scoped>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
