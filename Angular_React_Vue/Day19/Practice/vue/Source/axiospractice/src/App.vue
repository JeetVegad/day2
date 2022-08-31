<template>
  <div>
    <input type="text" v-model="name" placeholder="name" />
    <input type="text" v-model="email" placeholder="email" />
    <input type="text" v-model="gender" placeholder="gender" />
    <input type="text" v-model="status" placeholder="status" />
    <button type="submit" @click="add()">ADD</button>
    <table class="table table-bordered">
      <caption></caption>
      <th></th>
      <th></th>
      <tr v-for="item in info" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.status }}</td>
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
      name: "",
      email: "",
      gender: "",
      status: "",
      info: [],
      token: "39d8bbdacb2f6bbce5c066b8b32bc9994e93e0d8fc72b09dae7fd66487beb8b8",
    };
  },
  mounted() {
    axios
      .get("https://gorest.co.in/public/v2/users", {
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
        name: this.name,
        email: this.email,
        gender: this.gender,
        status: this.status,
      };
      await axios.post("https://gorest.co.in/public/v2/users", obj, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
    },
    async deleted(id){
      await axios.delete(`https://gorest.co.in/public/v2/users/${id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      })
    }
  },

};
</script>

<style scoped>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
