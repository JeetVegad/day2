<template>
 <div class="hello">
   <input type="text" v-model="name"/>
   <button @click="demo()">Print value</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
   data() {
    return {
    name:""
    }
   },
  props: {
    msg: String
  },
  methods:{
  demo()
  {
    // console.log("Hello");
  this.$emit('notifyinfo',this.name)
  }
  }
}
</script>