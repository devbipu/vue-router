<template>
	<div>
		<div class="container">
			<BackBtn />
			<div class="card mb-3">
			  <div class="row g-0">
			    <div class="col-md-4">
			      <img :src="`/src/assets/img/${destination.image}`" class="img-fluid rounded-start" alt="...">
			    </div>
			    <div class="col-md-8">
			      <div class="card-body">
			        <h5 class="card-title">{{destination.name}}</h5>
			        <p class="card-text">{{destination.description}}</p>
			        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
			      </div>
			    </div>
			  </div>
			</div>
			<div class="row">
				<router-link  class="col-md-3"
				v-for="experience in destination.experiences" 
				:key="experience.id" 
				:to="{name: 'experience.show', params: {exprienceSlug: experience.slug, destinationId: destination.id}}">

					<PlacesCard :places="experience"/>
				</router-link>
			</div>
			<div class="pt-3 mt-4">
				<router-view />
			</div>
		</div>
	</div>
</template>


<script>
	import storeData from '../store.js';
	import PlacesCard from './Places.vue';
	import BackBtn from '../components/BackBtn.vue';
	export default{
		name: 'DestinationDetails',
		components: {PlacesCard, BackBtn},
		props: {
			slug: {
				type: String,
				required: true,
			},
		},
		computed: {
			destination(){
				return storeData.destinations.find(
					(destinations) => destinations.slug == this.slug
				)
			}
		},
	}
</script>