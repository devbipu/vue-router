<script setup>
	import { RouterLink } from 'vue-router'
</script>


<template>
 	<!-- <nav class="navbar navbar-expand-lg bg-white shadow-sm p-2 mb-5 rounded">
	  <div class="container-fluid">
	    <RouterLink to="/" class="navbar-brand">Devbipu Vue App</RouterLink>
	    <div class="collapse navbar-collapse" id="navbarNav">
	      <ul class="navbar-nav">
	        <li class="nav-item" v-for="ds in destinations" :key="ds.id">
	        	<AppLink class="nav-link"  :to="{name: 'DestinationDetails', params: {slug: ds.slug, id: ds.id}}">{{ds.name}}</AppLink>
	        </li>
	      </ul>
	    </div>
	  </div>
	</nav> -->

	<nav class="navbar navbar-expand-lg bg-white shadow-sm p-2 mb-3 rounded">
	  <div class="container-fluid">
	    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
	      <span class="navbar-toggler-icon"></span>
	    </button>
	    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
	      <RouterLink class="navbar-brand" to="/">DevBipu</RouterLink>
	      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
	        <li class="nav-item" v-for="ds in destinations" :key="ds.id">
	        	<AppLink class="nav-link"  :to="{name: 'DestinationDetails', params: {slug: ds.slug, id: ds.id}}">{{ds.name}}</AppLink>
	        </li>
	        <li class="nav-item">
	        	<router-link class="nav-link" :to="{name: 'Dashboard'}">Dashbaord</router-link>
	        </li>
	      </ul>
	      <div class="d-flex" role="search">
	        <span>Text</span>
	      </div>
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