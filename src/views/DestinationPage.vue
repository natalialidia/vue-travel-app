<template>
    
    <div>

        <h2> {{ destination.name }} </h2>
        
        <div class="destination-details">
        
            <img :src="`/images/${destination.image}`" :alt="destination.name">
        
            <p> {{ destination.description }} </p>
        
        </div>

    </div>

</template>

<script>
    import srcData from '@/data.json'

    export default {

        props: {
            id: {type: Number, required: true}
        },
        
        computed: {
            destination() {
                return srcData.destinations.find(destination => destination.id === this.id)
            }
        },

    }
</script>