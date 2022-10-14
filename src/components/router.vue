<script setup>
	import { RouterLink } from 'vue-router'
</script>


<template>
 	<nav class="navbar navbar-expand-lg bg-light">
	  <div class="container-fluid">
	    <RouterLink to="/" class="navbar-brand">Vue Router </RouterLink>
	    <div class="collapse navbar-collapse" id="navbarNav">
	      <ul class="navbar-nav">
	        <li class="nav-item" v-for="ds in destinations" :key="ds.id">
	        	<AppLink class="nav-link"  :to="{name: 'DestinationDetails', params: {slug: ds.slug, id: ds.id}}">{{ds.name}}</AppLink>
	        </li>
	        <li class="nav-item">
	        	<router-link class="nav-link" :to="{name: 'Dashboard'}">Dashbaord</router-link>
	        </li>
	      </ul>
	    </div>
	  </div>
	</nav>
</template>


<script>
	import storeData from '../store.js';
	export default{
		name: 'Navbar',
		data(){
			return{
				destinations: storeData.destinations
			}
		},
		methods: {

		}
	}
</script>


<style scoped>
	
  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

</style>