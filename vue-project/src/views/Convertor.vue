<template >
<div>
    <input type="number" v-model="Cel" v-on:input="updateCel" placeholder="Cel" />
    <input type="number" v-model="Fahr" v-on:input="updateFahr"  placeholder="Farh"/>
  </div>

  <!-- <p>{{ Fahr }}</p>
  <button @click="updateFahr">click</button> -->
</template>

<script>
export default {
  data() {
    return {
      Cel: "",
      Fahr: "",
    };
  },
  methods: {
    updateCel() {
      this.Cel = (Number(this.Fahr) * (5/9) )- 32;
    },
    updateFahr() {
      this.Fahr = (Number(this.Cel) * (9/5)) + 32;
    },
  },
};
</script>

<style>
div{
  margin-top: 5px;
}
</style>