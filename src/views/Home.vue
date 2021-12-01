<template>
    <div class="home">

        <h1>All Destionations</h1>

        <div class="destinations">

            <router-link 
                v-for="destination in destinations" 
                :key="destination.id" 
                :to="{name: 'destination.page', params: {id: destination.id, slug: destination.slug}}">

                <h2> {{ destination.name }} </h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name">

            </router-link>

        </div>

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