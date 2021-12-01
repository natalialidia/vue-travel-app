<template>
    
    <div id="nav">

		<router-link id="logo" :to="{name: 'Home'}"> Vue Travel App </router-link>

		<router-link 
			v-for="destination in destinations" 
			:key="destination.id" 
			:to="{name: 'destination.page', params: {id: destination.id, slug: destination.slug}}">

			{{ destination.name }}

		</router-link>
	</div>

</template>

<script>
	import srcData from '@/data.json'

	export default {
		data() {
			return {
				destinations: srcData.destinations
			}
		}	
	}
</script>