<template>
	<div>
		<form class='form w-25 m-auto border p-4 rounded' @submit.prevent="onLogin">
			<div>
				<label class="form-label">Username</label>
				<input type="text" class="form-control"  v-model="username">
			</div>
			<div>
				<label class="form-label">Password</label>
				<input type="password"  class="form-control" v-model="password">
			</div>
			<div class="mt-2">
				<button class="btn btn-primary px-4" type="submit">Login</button>
			</div>
		</form>
	</div>
</template>


<script>
	export default{
		name: 'Login',
		data(){
			return{
				username: '',
				password: '',
			}
		},
		methods: {
			onLogin(){
				if(this.username){
					window.username = this.username
					this.$router.push({name: 'Dashboard'})
				}else{
					alert('Username Must not be empty')
				}
			}
		}
	}
</script>