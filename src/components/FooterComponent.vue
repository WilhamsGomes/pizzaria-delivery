<template>
    <v-footer class="d-flex flex-column">
        <div class="px-4 py-2 bg-black text-center w-100">
            {{ new Date().getFullYear() }} — <strong>Pizzaria Lorem Ipsum</strong>
        </div>
  </v-footer>
</template>

<script>
    export default {
        name:"FooterComponent",
    }
</script>

<style scoped>

.v-footer{
    padding: 0 !important;
}

</style>