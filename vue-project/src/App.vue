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
        <RouterLink to="/Calculator">Calculators</RouterLink>
        <RouterLink to="/TeamView">TeamViews</RouterLink>
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
