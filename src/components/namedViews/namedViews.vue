<template>
	<div>
		Named Views
		
		<router-view />
		<router-view name= "a" />
		<router-view name ="b" />
	</div>
	
</template>
<script>
	export default {
		
	}
</script>