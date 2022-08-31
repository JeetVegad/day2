<template>
  <div>
    <div class= "mt-5 rounded container bg-dark text-white">
      <div class="row">
        <div class="col">
          <h1 class="text-center">Practice Form</h1>
          <form>
            <div>
              <label class="form-label">Enter Your Id : </label>
              <input type="number" v-model="id" class="mb-2 form-control" />
              <div v-if="!id">
                <span class="text-danger fs-6">Id is Required</span>
              </div>
            </div>
            <div>
              <label class="form-label">Enter Your name : </label>
              <input type="text" v-model="name" class="mb-2 form-control" />
              <div v-if="!name">
                <span class="text-danger fs-6">Name is Required</span>
              </div>
            </div>
            <div>
              <label class="form-label">Enter Your Address : </label>
              <input type="text " v-model="address" class="mb-2 form-control" />
              <div v-if="!address">
                <span class="text-danger fs-6">Address is Required</span>
              </div>
            </div>
          </form>
          <button
            type="button"
            @click="store()"
            :disabled="!isComplete()"
            class="rounded bg-light mb-4 px-3 py-2 mt-4"
          >
            StoreData
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="mt-5 table table-bordered">
        <caption></caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      id: 0,
      name: "",
      address: "",
      list: [],
    };
  },
  validations() {
    return {
      id: { required },
      name: { required },
      address: { required },
    };
  },
  methods: {
    store() {
      var obj = { id: this.id, name: this.name, address: this.address };
      this.list = [...this.list, obj];
    },
    isComplete() {
      if (this.id != "" && this.name != "" && this.address != "") {
        return true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
