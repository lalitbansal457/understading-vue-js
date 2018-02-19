<template>
	
	<div class="container">
		<div class="row">
			<div>
				<h1>Parent Component</h1>
				<p>Age : {{age}}</p>
				<button @click="updateParentAge">Update Age</button>
				<div class="col-sm-12">
					<foos v-bind:childAge="age" @changeAge="age = $event"></foos>
					<router-view></router-view>
				</div>
				
			</div>
			
		</div>
		
	</div>
	
</template>

<script>
	import foo from '@/components/profile/foo';
	console.log(foo)
	export default {
		// props: ['id']
		data: function() {
			return {
				age: 3
			}
		},
		methods: {
			updateParentAge() {
				this.age = 4;
			}
		},
		components: {
			'foos':foo
		}
	}
</script>

<style>
	.row {
		border: 1px solid black;
		padding: 20px;
	}
	.col-sm-12 {
		margin-top: 50px;
		padding: 20px;
		border: 1px solid black;
	}
</style>