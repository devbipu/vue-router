<template>
	<a
	 v-if="hrefLink"
	 target="_blank"
	 :href="to">
		<slot/>
	</a>
	<router-link v-else v-bind="$props">
		<slot/>
	</router-link>
</template>


<script>
	import {RouterLink} from "vue-router";
	export default{
		props: {
			...RouterLink.props
		},
		computed: {
			hrefLink(){
				return typeof this.to === 'string' && this.to.startsWith('http')
			}
		},
	}
</script>