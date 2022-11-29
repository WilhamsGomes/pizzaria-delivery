<template>
    <div>
        <TitlePage txtTitle="Newsletter" class="mt-8 mb-4"/>
        <v-form
            ref="form"
            lazy-validation
            class=" mb-8"
        >
            <v-text-field
                :counter="10"
                label="Nome"
                required
                variant="solo"
            ></v-text-field>

            <v-text-field
                type="email"
                label="E-mail"
                required
                variant="solo"
            ></v-text-field>

            <v-text-field
                label="Número de telefone"
                required
                variant="solo"
            ></v-text-field>

            <v-checkbox
                label="Deseja receber promoções exclusivas?"
                required
                class=" d-flex justify-center"
            ></v-checkbox>

            <v-btn
                id="button-form"
                color="red"
                class="mr-4"
            >
            Enviar
            </v-btn>
        </v-form>
    </div>
</template>

<script>

    import TitlePage from './TitlePage.vue';

    export default {
        name:"FormContact",
        data(){
            return{
                checkbox: true,
            }
        },
        components: {
            TitlePage,
        },
    }
</script>

<style scoped>

#button-form{
    margin: 0 auto !important;
    display: flex !important;
    justify-content: center !important;
}

</style>