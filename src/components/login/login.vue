<template>
	<div class="container">
		<form v-on:submit.prevent="validateLogin" novalidate>
		{{name}}
			<div class="form-group" v-bind:class="{'has-error': (!$v.loginObj.email.required || !$v.loginObj.email.email) && $v.loginObj.email.$dirty}">
				<label for="email">Email address:</label>
				<input type="email" id="email" placeholder="Email" class="form-control" v-model="loginObj.email" @blur="$v.loginObj.email.$touch" >
				<div v-if="$v.loginObj.email.$error">
					<p v-if="!$v.loginObj.email.required && $v.loginObj.email.$dirty">
						Email is required.
					</p>
					<p v-if="!$v.loginObj.email.email">
						Wrong email pattern.
					</p>
				</div>
			</div>
			<div class="form-group"  v-bind:class="{'has-error': (!$v.loginObj.password.required || !$v.loginObj.password.minlength) && $v.loginObj.password.$dirty}">
				<label for="pwd">Password:</label>
				<input type="password" id="pwd" placeholder="password" class="form-control" v-model="loginObj.password" @blur="$v.loginObj.password.$touch" >
			</div>
			<div v-if="$v.loginObj.password.$error">
				<p v-if="!$v.loginObj.password.required && $v.loginObj.password.$dirty">
					password is required
				</p>
				<p v-if="!$v.loginObj.password.minlength && $v.loginObj.password.$dirty">
					Wrong password pattern
				</p>
			</div>
			<div class="form-group">
				<input type="submit" class="btn btn-primary" value="Login" >
			</div>

			<hr>
			<pre>{{$v}}</pre>
		</form>
	</div>
</template>

<script>

	import axios from 'axios';
	//import { required, email } from 'vuelidate/lib/validations'
	import { required, minLength, email } from 'vuelidate/lib/validators'
	
	export default {
		data: function() {
			return {
				name: "lalit",
				loginObj: {},
			}
		},
		validations : {
			loginObj : {
				email: {
					required,
					email
				},
				password: {
					required,
					minlength: minLength(5)
				}
				
			}
		},
		methods: {
			validateLogin() {
				this.name = "vikas";
				console.log(this.loginObj);
				/*axios.get('http://jsonplaceholder.typicode.com/todos')
				    .then(response => {
				    	console.log(response);
				         this.todos = response.data
				    })
				    .catch(error => {
				      console.log(error);
				    })*/
			    if(this.loginObj.email == "lalit@gmail.com" && this.loginObj.password == "12345") {
			    	this.$router.push({ path: 'profile' })
			    }
			},
			validEmail:function(email) {
			    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			    return re.test(email);
			}
		}
	}
</script>