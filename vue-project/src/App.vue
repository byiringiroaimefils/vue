<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView >

    <header>
      <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Calculator">Calculator</RouterLink>
        <RouterLink to="/TeamView">TeamView</RouterLink>
        <RouterLink to="/Convertor">Convertor</RouterLink>
      </nav>
    </header>
  
    </div>
    <RouterView />
    <RouterView/>
</template>

<style>
nav {
  display: flex;
  gap: 20px;
  
} 
</style>
