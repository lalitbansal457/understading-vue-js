<template>
	<div>
		<h2>Custom Directive(Global)</h2>
		<p v-background:background.delayed="'red'">This is global directive</p>

		<hr>
		<h2>Custom Directive(Local)</h2>
		<p v-local-background>This is local directive</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		directives: {
			'local-background': {
				bind(el, binding, vnode) {
					el.style.background = 'green';
					el.style.color = 'white';
				}
			}
		}
	}
</script>