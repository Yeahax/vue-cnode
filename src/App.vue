<template>
    <div>
    	<top></top>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import top from '../src/components/top.vue'
    export default {
        components: {
        	top: top
        },
    }
</script>

<style >
    
</style>
