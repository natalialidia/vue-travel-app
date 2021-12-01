<template>

	<the-navigation/>

	<div class="container">
		<router-view></router-view>
	</div>
	
</template>

<script>

import TheNavigation from '@/components/TheNavigation.vue'

export default {
	components: {
		'the-navigation': TheNavigation
	}
}

</script>

<style>
	@import "./assets/main.css";
</style>
