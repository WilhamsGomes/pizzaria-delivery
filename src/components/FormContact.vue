<template>
    <div>
        <TitlePage txtTitle="Newsletter" class="mt-8 mb-4"/>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class=" mb-8"
        >
            <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Nome"
                required
                variant="solo"
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                variant="solo"
            ></v-text-field>

            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Deseja receber promoções exclusivas?"
                required
                class=" d-flex justify-center"
            ></v-checkbox>

            <v-btn
                id="button-form"
                color="red"
                class="mr-4"
                @click="validate"
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