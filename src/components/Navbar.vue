<script setup>
	import { RouterLink } from 'vue-router'
</script>


<template>
	
	<div class="bg-white shadow-sm px-2 mb-3 rounded d-flex align-items-lg-center align-items-sm-start justify-content-between">
		<nav class="navbar navbar-expand-lg">
		  <div class="container-fluid">
		    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header_mobile_nav" aria-controls="header_mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
		      <span class="navbar-toggler-icon"></span>
		    </button>

		    <div class="collapse navbar-collapse" id="header_mobile_nav">
		      <RouterLink class="navbar-brand" to="/">DevBipu</RouterLink>
		      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
		        <li class="nav-item" v-for="ds in destinations" :key="ds.id">
		        	<AppLink class="nav-link"  :to="{name: 'DestinationDetails', params: {slug: ds.slug, id: ds.id}}">{{ds.name}}</AppLink>
		        </li>
		        <li class="nav-item">
		        	<router-link class="nav-link" :to="{name: 'Dashboard'}">Dashbaord</router-link>
		        </li>
		        <li class="nav-item">
		        	<router-link class="nav-link" :to="{name: 'AboutDev'}">Author</router-link>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
		<div class="d-flex pt-lg-0 pt-3">
      <a href="https://github.com/devbipu" target="_blank" class="header_social">
      	<img src="/img/github.svg">
      </a>
      <a href="https://linkedin.com/in/devbipu/" target="_blank" class="header_social">
      	<img src="/img/linkedin.svg">
      </a>
      <a href="https://wa.me/01787439657" target="_blank" class="header_social">
      	<img src="/img/whatsapp.svg">
      </a>
    </div>
	</div>
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
  .header_social{
  	display: inline-block;
  	margin: 0px 10px;

  }
  .header_social img{
  	width:  20px;
  }
</style>
