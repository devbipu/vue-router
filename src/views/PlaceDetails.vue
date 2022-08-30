<template>
	<div class="container">
		<div class="card mb-3">
		  <div class="row g-0" v-if="experience">
		    <div class="col-md-4">
		      <img :src="`/src/assets/img/${experience.image}`" class="img-fluid rounded-start" alt="...">
		    </div>
		    <div class="col-md-8">
		      <div class="card-body">
		        <h5 class="card-title">{{experience.name}}</h5>
		        <p class="card-text">{{experience.description}}</p>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>


<script>
	import storeData from '../store.js';
	export default{
		name: 'PlaceDetails',
		props: {
			destinationId: {
				type: String,
				required: true,
				default: 0,
			},
			exprienceSlug: {
				type: String,
				required: true,
			},
		},
		computed: {
			destination(){
				return storeData.destinations.find(
					destination => destination.id == this.destinationId
				)
			},
			experience(){
				return this.destination.experiences.find(
					experience => experience.slug == this.exprienceSlug
				)
			}
		},
		beforeRouteEnter(to, from, next){
			return next()
		}

	}
</script>