
<template>
    <div class="flex">
        <ProfileCrd name='John' occuction="Web Develop" imge="https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain" />
        <ProfileCrd name="Benimana" occuction="UI/Ux Designer"/>
    </div>
</template>
<script >
import ProfileCrd from "../components/ProfileCrd.vue";
export default{
    components:{
        ProfileCrd
    }
}
</script>


<style>
.flex{
    display: flex;
    gap:  20px;
    margin-top: 20px;

}
</style>
