<template>
  <div class="about">
    <h1>This Basic Fundamentals Of Vuejs Version 3</h1>
    <p>{{ count }}</p>
    <button v-on:click="Increment()">Increment</button>
    <button v-on:click="Decrement()">Decrement</button>
  </div> <br><br>
  <div class="Calculator">
    <div class="border">{{ Value||0 }}</div><br>
   <div class="buttons">
    <button @click="clean">C</button>
    <button @click="Negative">+/-</button>
    <button @click="Modules">%</button>
    <button @click="Del">Del</button>
    <button @click="append('9')">9</button>
    <button @click="append('8')">8</button>
    <button @click="append('7')">7</button>
    <button @click="Add" >+</button>
    <button @click="append('6')">6</button>
    <button @click="append('5')">5</button>
    <button @click="append('4')">4</button>
    <button @click="Minus">-</button>
    <button @click="append('3')">3</button>
    <button @click="append('2')">2</button>
    <button @click="append('1')">1</button>
    <button @click="Multiplication">x</button>
    <button @click="append('0')">0</button>
    <button @click="append('00')">00</button>
    <button @click="dot">.</button>
    <button @click="Equl">=</button>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      Value: "",
    };
  },
  methods: {
    Increment() {
      this.count++;
    },
    Decrement() {
      this.count--;
    },


    // Calcultor
    clean(){
     this.Value=''
    },
    append(a){
      this.Value+=a
    },
    Negative(){
      this.Value=this.Value.charAt(0) === '-'? this.Value: `-${this.Value}`
    },
    Modules(){
       this.Value=Number(this.Value)/100
    },
    dot(){
      if(this.Value.indexOf('0')==-1){
        this.append('.')
      }
    },
    Del(){
      console.log("Del clicked");
    },
    Add(){
      console.log("Add opertorr clicked");
    },
    Minus(){
      console.log('Minus clicked');
    },
    Multiplication(){
      console.log('Multiplication clicked');
    },
    Equl(){
       console.log("Equl is clicked");
    }


  },
};
</script>
<style>
.border{
  border: 2px solid black;
  width: 170px;
}
.buttons{
  display: grid;
  grid-template-columns: repeat(4,42px);
}

</style>
