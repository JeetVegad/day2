<template>
  <div class="hello container">
    <h1 class="text-center mb-4">Student Addmission Form</h1>
    <hr />
    <form @submit.prevent="submit">
      <h2 class="mb-4">Student Details</h2>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">FirstName</label>
            <input type="text" class="form-control" v-model="name.firstName" />
            <span v-if="v$.name.firstName.$error" class="text-danger">
              Firstname is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">MiddleName</label>
            <input type="text" class="form-control" v-model="name.middlename" />
            <span v-if="v$.name.middlename.$error" class="text-danger">
              Middlename is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">LastName</label>
            <input type="text" class="form-control" v-model="name.lastName" />
            <span v-if="v$.name.lastName.$error" class="text-danger">
              Lastname is required
            </span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">Date of Birth</label>
            <input type="date" class="form-control" v-model="dob" />
            <span v-if="v$.dob.$error" class="text-danger">
              Date of birth is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Place of Birth</label>
            <input type="date" class="form-control" v-model="pob" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">First Language</label>
            <input type="text" class="form-control" v-model="fl" />
          </div>
        </div>
      </div>
      <h2 class="mb-4">Address</h2>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">City</label>
            <input type="text" class="form-control" v-model="address.city" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">State</label>
            <input type="text" class="form-control" v-model="address.state" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Country</label>
            <input type="text" class="form-control" v-model="address.country" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Pincode</label>
            <input type="number" class="form-control" v-model="address.pin" />
          </div>
        </div>
      </div>
      <h2 class="mb-4">Father Details</h2>
      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">FirstName</label>
            <input
              type="text"
              class="form-control"
              v-model="fname.ffirstName"
            />
            <span v-if="v$.fname.ffirstName.$error" class="text-danger">
              Firstname is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">MiddleName</label>
            <input
              type="text"
              class="form-control"
              v-model="fname.fmiddlename"
            />
            <span v-if="v$.fname.fmiddlename.$error" class="text-danger">
              Middlename is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">LastName</label>
            <input type="text" class="form-control" v-model="fname.flastName" />
            <span v-if="v$.fname.flastName.$error" class="text-danger">
              Lastname is required
            </span>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">Education Qualifiaction</label>
            <input type="text" class="form-control" v-model="eq" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Profession</label>
            <input type="text" class="form-control" v-model="pro" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Designation</label>
            <input type="text" class="form-control" v-model="des" />
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="text" class="form-control" v-model="email" />
            <span v-if="v$.email.$error" class="text-danger">
              Valid email is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Phone</label>
            <input type="number" class="form-control" v-model="ph" />
            <span v-if="v$.ph.$error" class="text-danger">
              Valid phone is required
            </span>
          </div>
        </div>
      </div>
      <h2 class="mb-4">Mother Details</h2>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">FirstName</label>
            <input
              type="text"
              class="form-control"
              v-model="mname.mfirstName"
            />
            <span v-if="v$.mname.mfirstName.$error" class="text-danger">
              Firstname is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">MiddleName</label>
            <input
              type="text"
              class="form-control"
              v-model="mname.mmiddlename"
            />
            <span v-if="v$.mname.mmiddlename.$error" class="text-danger">
              Middlename is required
            </span>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">LastName</label>
            <input type="text" class="form-control" v-model="mname.mlastName" />
            <span v-if="v$.mname.mlastName.$error" class="text-danger">
              Lastname is required
            </span>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">Education Qualifiaction</label>
            <input type="text" class="form-control" v-model="meq" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Profession</label>
            <input type="text" class="form-control" v-model="mpro" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Designation</label>
            <input type="text" class="form-control" v-model="mdes" />
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <div class="form-group">
            <label class="form-label">Emergency</label>
            <input type="text" class="form-control" v-model="emergency" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Reference Details</label>
            <input type="text" class="form-control" v-model="resfdet" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label class="form-label">Reference Through</label>
            <input type="text" class="form-control" v-model="refthr" />
          </div>
        </div>
      </div>

      <input
        type="submit"
        class="mb-4 mt-2 btn btn-primary rounded bg-primary"
        :disabled="!isComplete()"
      />
    </form>
    <div class="container bg-light">
      <ul v-for="item in list" :key="item.name">
        <div class="row">
          <div class="col">
            <li class="list-unstyled"><h5>Student Details</h5></li>
            <li> Name :
              {{ item.name.firstName }} {{ item.name.middlename }}
              {{ item.name.lastName }}
            </li>
            <li>DOB :{{ item.dob }}</li>
            <li>POB :{{ item.pob }}</li>
            <li>First Language :{{ item.fl }}</li>
            <li>
              Address:{{ item.address.city }} , {{ item.address.state }} ,
              {{ item.address.country }} , {{ item.address.pin }}
            </li>
          </div>
          <div class="col">
            <li class="list-unstyled"><h5>Father Details</h5></li>
            <li> Name :
              {{ item.fname.ffirstName }} {{ item.fname.fmiddlename }}
              {{ item.fname.flastName }}
            </li>
            <li>Email : {{ item.email }}</li>
            <li>Phone : {{ item.ph }}</li>
            <li>Education Qualifiaction : {{ item.eq }}</li>
            <li>Profession : {{ item.pro }}</li>
            <li>Designation : {{ item.des }}</li>
          </div>
          <div class="col">
            <li class="list-unstyled"><h5>Mother Details</h5></li>
            <li>Name :
              {{ item.mname.mfirstName }} {{ item.mname.mmiddlename }}
              {{ item.mname.mlastName }}
            </li>

            <li>Education Qualifiaction : {{ item.meq }}</li>
            <li>Profession : {{ item.mpro }}</li>
            <li>Designation : {{ item.mdes }}</li>
          </div>
          <div class="col">
            <li class="list-unstyled"><h5>Other Details</h5></li>
            <li>Emergency Contact : {{ item.emergency }}</li>
            <li>Reference Details : {{ item.resfdet }}</li>
            <li>Reference Through : {{ item.refthr }}</li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: {
        firstName: "",
        lastName: "",
        middlename: "",
      },
      dob: "",
      fl: "",
      pob: "",
      address: {
        city: "",
        state: "",
        country: "",
        pin: "",
      },
      fname: {
        ffirstName: "",
        flastName: "",
        fmiddlename: "",
      },
      email: "",
      eq: "",
      pro: "",
      des: "",
      ph: "",
      mname: {
        mfirstName: "",
        mlastName: "",
        mmiddlename: "",
      },
      meq: "",
      mpro: "",
      mdes: "",
      emergency: "",
      resfdet: "",
      refthr: "",
      list: [],
    };
  },
  validations() {
    return {
      name: {
        firstName: { required },
        lastName: { required },
        middlename: { required },
      },
      fname: {
        ffirstName: { required },
        flastName: { required },
        fmiddlename: { required },
      },
      mname: {
        mfirstName: { required },
        mlastName: { required },
        mmiddlename: { required },
      },
      dob: { required },
      ph: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      email: {
        required,
        email,
      },
    };
  },
  methods: {
    submit() {
      this.v$.$touch();

      // if (!this.v$.$invalid) {
      //   console.log(
      //     `FirstName is ${this.firstName},LastName is ${this.lastName} and email is ${this.contact.email}`
      //   );
      // }
      if (!this.v$.$invalid){
      var obj = {
        name: this.name,
        dob: this.dob,
        fl: this.fl,
        pob: this.pob,
        address: this.address,
        fname: this.fname,
        email: this.email,
        eq: this.eq,
        pro: this.pro,
        des: this.des,
        ph: this.ph,
        mname: this.mname,
        meq: this.meq,
        mpro: this.mpro,
        mdes: this.mdes,
        emergency: this.emergency,
        resfdet: this.resfdet,
        refthr: this.refthr,
      };
      this.list = [...this.list, obj];
      // console.log(this.list);
      }
    },
    isComplete(){
      if(this.name!="" && this.dob!="" && this.fname!="" && this.mname!="" &&this.ph!="" && this.email!=""){
        return true;
      }
    }
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
