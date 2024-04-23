<template>
  <div class="about">

    <h1>This is an about page</h1>
    <p>{{ count }}</p>
    <button v-on:click="Increment()">Increment</button>
    <button v-on:click="Decrement()">Decrement</button>
  </div>
</template>
<script>
export default{
  data(){
    return{
      count:0
    }
  },
  methods:{
    Increment(){
    this.count++
    },
    Decrement(){
      this.count--
    }
  }
}
</script>
<style>

</style>
