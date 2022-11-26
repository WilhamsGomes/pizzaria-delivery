<template>
     <div>
        <h1>{{txtTitle}}</h1>
    </div>
</template>

<script>
    export default {
        name: "TitlePage",
        props: ['txtTitle']
    }
</script>

<style scoped>

h1{
    display:flex; 
    align-items: center; 
    justify-content: center; 
    text-transform: uppercase;
}

</style>