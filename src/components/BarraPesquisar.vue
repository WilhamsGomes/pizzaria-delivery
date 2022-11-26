<template>
    <v-card-text>
      <v-text-field
        class="mt-8"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Pesquisar item"
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
</template>

<script>
    export default {
        name:"BarraPesquisar",
        data: () => ({
            loaded: false,
            loading: false,
        }),

        methods: {
            onClick () {
                this.loading = true

                setTimeout(() => {
                    this.loading = false
                    this.loaded = true
                }, 2000)
            },
        },
    }
</script>

<style>

.v-field{
    margin: 0 auto !important;
    max-width: 50% !important;
}

</style>