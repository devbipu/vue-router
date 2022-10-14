<template>
	<div class="card">
		<img :src="`/img/${places.image}`" class="card-img-top" alt="...">
		<div class="card-body">
		   <h5 class="card-title">{{places.name}}</h5>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Places',
		props: {
			places: {
				type: Object,
				required: true,
			}
		}
	}
</script>