<template>
	<div class="panel">
		<div class="panel-body">
		<h2>Using Filter</h2>
			<p>{{text | toUpperCase}}</p>
			<input type="text" name="" v-model="filterText" />
		</div>
		<div>
		{{fruitFilter.length}}
			<ul>
				<li v-for="fruit in fruitFilter">{{fruit}}</li>
			</ul>
		</div>
		<hr>
		<h3>Mixins</h3>
		<p>Data from mixin : {{name}} </p>
	</div>
</template>

<script>
	import {fruitMixin} from '../../mixin/fruitMixin.js';

	export default {
		mixins: [fruitMixin],
		data: function() {
			return {
				text: 'Hello Friend',
				fruits: ["ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"],
				filterText: ''
			}
		},
		methods: {
			getRandomName() {
				console.log(this.fruits.length)
			}
		},
		filters: {
			toUpperCase(value) {
				return value.toUpperCase();
			}
		},
		computed: {
			fruitFilter() {
				return this.fruits.filter((element) =>{
					return element.match(this.filterText);
				})
			}
		},
		created() {
			
		}
	}
</script>

<style type="text/css">
	ul {
		margin: 0 auto;
		max-width: 20%;
		text-align: left;
	}

	ul li {
		width :auto;
	}
</style>