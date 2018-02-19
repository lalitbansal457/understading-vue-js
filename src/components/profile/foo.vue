<template>
	<div>
		<h3>Child Component</h3>
		
		<p> Age : {{age}} </p>
		<button @click="updateAge">Update Age</button>
	</div>
</template>

<script>
	export default {
		props: ['childAge'],
		data : function() {
			return {
				age : this.childAge
			}
		},
		watch: {
			childAge: function(newValue, oldValue) {
				console.log(newValue, oldValue);
				this.age = newValue;
			}
		},
		methods: {
			updateAge() {
				this.age = 2;
				this.$emit('changeAge', this.age)
			}
		}
	}
</script>