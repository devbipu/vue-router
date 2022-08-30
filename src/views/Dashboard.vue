<template>
	<div>
		<h2>Welcome {{username}} </h2>
		<button class="btn btn-primary btn-sm px-3" @click="onLogOut()">Log out</button>
		<router-link :to="{name: 'Invoice'}" class="btn btn-outline-info btn-sm px-3" >Invoice</router-link>
	</div>
</template>

<script>
	export default{
		name: 'Dashboard',
		data(){
			return{
				username: window.username
			}
		},
		methods: {
			onLogOut(){
				window.username = null;
				this.$router.replace({ //Replace used for not record last route history in browser
					name: 'Login',
					query: {logout: true}
				})
			}
		}
	}
</script>