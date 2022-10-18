<script setup>
import {RouterView} from 'vue-router';
import NavLinks from './components/Navbar.vue';
</script>

<template>
  <header>
     <NavLinks/>
  </header>
  <main class="container-fluid">
    <router-view class="view left-sidebar" name="LeftSideBar"></router-view>
   <RouterView v-slot="{Component}" class="main-view">
     <transition name="fade" mode="out-in">
       <component :is="Component" :key="$route.path"></component>
     </transition>
   </RouterView> 
  </main>
</template>


<style lang="css">
  .fade-leave-to, .fade-enter-form{
    opacity: .3;
    transform: scale(.9);
  }

  .fade-leave-active, .fade-enter-active{
    transition: opacity .2s, transform .2s;
  }


 /* .slide-enter-to{
    opacity: 1;
    transform: scale(1);
    transition: all 1s each-in;
  }*/

 /* .slide-enter-active{
    transition: opacity 12s, transform 12s;
  }*/


  /*slide-enter-active slide-enter-to
  slide-leave-active slide-leave-to*/
</style>