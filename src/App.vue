<template>
  <!-- navbar -->
  <NavBar/> 
  <router-view></router-view>
  <!-- <HomeApp/> -->

  <!-- navbar -->
</template>



<script>
import NavBar from './components/NavBar.vue';
export default {
  components: {
    NavBar,
},
}

</script>
