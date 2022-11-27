<template>
    <div justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            class="align-center"
        >
            <template v-slot:activator="{ props }">
                <v-btn 
                    icon 
                    color="red"
                    class="mr-16"
                    v-bind="props"
                >
                    <v-badge  offset-y="0" offset-x="-2" color="white" :content="$store.state.quantItems">
                        <v-icon>mdi-cart-outline</v-icon>
                    </v-badge>
                </v-btn>
            </template>

            <v-card>
                <v-card-title>
                    <span class="text-h5">Carrinho</span>
                </v-card-title>
                <v-card-subtitle>
                    Finalize seu pedido 
                </v-card-subtitle>

                <v-card-item class="mb-8 mt-8 ">
                    <v-card-title class="font-weight-bold"> 3x Pizza calabresa </v-card-title>
                    <v-card-subtitle>
                        <span class="mr-1 font-weight-bold mb-4">Tamanho: G</span>
                    </v-card-subtitle>
                    <v-divider></v-divider>
                    <v-card-title class="font-weight-bold"> 3x Pizza Mussarela </v-card-title>
                    <v-card-subtitle>
                        <span class="mr-1 font-weight-bold">Tamanho: P</span>
                    </v-card-subtitle>

                </v-card-item>

                <v-divider></v-divider>
                <v-card-title class="ml-2 font-weight-bold">Total: R$ 79,00</v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="transparent"
                        variant="flat"
                        @click="dialog = false"
                    >
                        Fechar
                    </v-btn>
                    <v-btn
                        color="red"
                        variant="flat"
                        @click="dialog = false"
                    >
                        Finalizar pedido
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name:"CardCarrinho",
        data: () => ({
            dialog: false,
        }),
    }
</script>

<style scoped>

.v-dialog .v-overlay__content{
    flex-direction: inherit !important;
    justify-content: center !important;
}

</style>