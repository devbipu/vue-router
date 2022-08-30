<template>
	<div>
		<h2>Invoice page {{username}}</h2>
	</div>
</template>

<script>
	import {ref} from 'vue';
	import {onBeforeRouteLeave} from 'vue-router'

	export default{
		setup(){
			const username = ref(window.username);

			onBeforeRouteLeave((to, form) => {
				const confirmRes = window.confirm('Are you sure, you want to leave the Page');
				if (!confirmRes) return false
			})


			return{
				username,
			}
		}
	}
</script>