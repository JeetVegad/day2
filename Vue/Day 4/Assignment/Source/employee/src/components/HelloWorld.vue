<template lang="">
  <div className="bg-dark d-flex flex-column   align-items-center">
    <h1 className="text-white my-5">Sign up form</h1>
    <form id="myForm"  name="myForm" className="w-25 text-white">
      <div className="mt-3 text-start">
        <label className="form-label" >Enter Name: </label>
        <input
          className="form-control"
          type="text"
          id="Name"
          name="name"
          placeholder="Enter your name"
          v-model="employees.name"
        />
      </div>
      <div className="my-4  text-start">
        <label className="form-label" >Enter Address: </label>
        <input
          className="form-control"
          type="text"
          name="address"
          id="Address"
          v-model="employees.address"
          placeholder="Enter your address"
        />
      </div>
      <div className=" text-start">
        <label className="form-label" >Enter gender: </label>
        <select
          className="form-select"
          name="gender"
          v-model="employees.gender"
        >
          <option></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className=" text-start my-4">
        <label className="form-label" 
          >Enter date of joining:
        </label>
        <input
          className="form-control"
          type="date"
          name="doj"
          id="doj"
          v-model="employees.doj"
        />
      </div>
      <div className=" text-start">
        <label className="form-label" >Enter Hobbies: </label>
        <input
          className="form-control"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="Enter your hobbies with leaving space"
          v-model="employees.hobbies"
        />
      </div>
      <button
        className="btn btn-warning my-4"
        type="submit"
        @click="(e) => storeData(e)"
      >

        Save Employee
      </button>
    <button className="btn btn-light mx-4" @click="employeeDataFilter()">Filter</button>

    </form>
         <template v-if="employees[1] && employees[1].id !== ''">
    <table className="table table-striped table-success w-50">
      <caption>
  
      </caption>
      <thead>
        <tr>
    
            <th
              scope="col"
              v-for="items in Object.keys(employees[0])"
              :key="items"
            >
              {{ items }}
            </th>
        
        </tr>
      </thead>
      <tbody>
        <tr v-for="tr in getSortedList()" :key="tr.id">
          <td v-for="data in Object.keys(tr)" :key="data">
            {{ tr[data] }}
          </td>
        </tr>
      </tbody>
    </table>
      </template>
  </div>
</template>
<script>
export default {
  name: "EmployeeComponent",
  data() {
    return {
      employees: [
        {
          id: "",
          name: "",
          address: "",
          gender: "",
          doj: "",
          hobbies: "",
        },
      ],
    };
  },
  methods: {
    storeData(e) {
      e.preventDefault();
      const formData = new FormData(document.getElementById("myForm"));
      let obj = {
        id: this.employees.length,
      };
      for (let x of formData.entries()) {

          obj[x[0]] = x[1];

      }
      if (
        obj.name !== "" &&
        obj.address !== "" &&
        obj.gender !== "" &&
        obj.doj !== "" &&
        obj.hobbies !== ""
      ) {
        this.employees = [...this.employees, obj];
        this.employees = this.employees.filter(data=>data.id!==null)
        document.getElementById("myForm").reset();
      }
    },
    getSortedList() {
      return this.employees.sort((a, b) => a.name.localeCompare(b.name));
    },
    employeeDataFilter() {
      let thisMonth = new Date();
      this.employees = this.employees.filter(
        (data) => parseInt(data.doj.split("-")[1]) === thisMonth.getMonth() + 1
      );
    },
  },
};
</script>
<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
