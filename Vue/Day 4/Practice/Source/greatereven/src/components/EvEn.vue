<template>
    <div class="ms-4">
        <h3>Check Even Number Between 1 to 100 :</h3>
    <div class="mt-4">
    <h5 v-for="item in result" :key="item">
    <h4 v-if="item%2==0">
        {{item}}
    </h4>
</h5>
 </div>
    <button @click="even" class="text-white rounded mt-3 p-1 mx-2 bg-success">Check</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            result:[] 
        }
    },
    methods: {
        even:function(){
            for( var i=0;i<=100;i++){
        if( i%2==0){
          this.result.push(i);
        }
    }   
        }
    },
}
</script>
<style scoped>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>