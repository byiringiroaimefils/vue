<template>
    <div class="user">
        <img v-bind:scr=imge alt="">
        <h2>{{ name }}</h2>
        <h3>{{occuction}}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque 
            Ut numquam eum autem maxime voluptate molestias nihil dolorem.</p>
    </div>
</template>

<script>
export default{
    props:{
     name:'',
     occuction:'',
     imge:''
    },
   
}
</script>


<style>
 .user{
    width: 300px;
    height: 350px;
    background-color: white;
    box-shadow: 2px 2px 2px 2px #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
 }
 .user img{
    width: 100px;
    position: relative;
    left: 30%;
    top: 2%;
 }
</style>
