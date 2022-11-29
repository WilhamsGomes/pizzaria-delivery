<template>
    <div justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            class="align-center"
            max-width="40%"
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
                <div v-if="$store.state.quantItems > 0">
                    <v-card-title>
                    <span class="text-h5 d-flex justify-center">Carrinho</span>
                    </v-card-title>
                    <v-card-subtitle class="d-flex justify-center">
                        Finalize seu pedido 
                    </v-card-subtitle>

                    <v-card-item 
                        v-for="item, index in $store.state.carrrinhoDelivery"
                        :key="index"
                        class="mb-4 mt-8 " 
                    >
                        <v-card-title class="font-weight-bold"> 🍕 {{item.quantityProduct}}x {{item.titleProduct}} </v-card-title>
                        <v-card-subtitle>
                            <span class="mr-1 font-weight-bold mb-4">
                                Tamanho:
                                <span v-if="item.selectionTamanho == 0">P</span>
                                <span v-if="item.selectionTamanho == 1">M</span>
                                <span v-if="item.selectionTamanho == 2">G</span>
                            </span>
                        </v-card-subtitle>
                        <v-divider></v-divider>
                    </v-card-item>

                    <v-divider></v-divider>
                    <v-card-title class="ml-2 font-weight-bold">Total: R$ {{$store.getters.precoTotal}}</v-card-title>
                </div>

                <div v-else class="mt-8" align="center" id="text-carrinho-vazio">
                    Ops. Seu carrinho está vazio 😥😥 <br> Que tal adicionar itens nele?
                </div>

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
                        v-if="$store.state.quantItems > 0"
                        color="transparent"
                        variant="flat"
                        @click="$store.commit('limparCarrinho')"
                    >
                        Limpar
                    </v-btn>
                    <v-btn
                        v-if="$store.state.quantItems > 0"
                        color="red"
                        variant="flat"
                        @click="dialogConfirm = true"
                    >
                        Finalizar pedido
                    </v-btn>
                </v-card-actions>
            </v-card>

            <v-dialog
                v-if="dialogConfirm"
                activator="parent"
            >
                <v-card>
                    <v-card-title>Confirme seu pedido</v-card-title>
                    <v-card-text 
                        v-for="item, index in  $store.state.carrrinhoDelivery" 
                        :key="index"
                        class="font-weight-bold"
                    >
                        {{item.quantityProduct}}x {{item.titleProduct}} - 
                        <span v-if="item.selectionTamanho == 0">P</span>
                        <span v-if="item.selectionTamanho == 1">M</span>
                        <span v-if="item.selectionTamanho == 2">G</span>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="red" block variant="flat" @click="fazerPedido()">Finalizar pedido</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name:"CardCarrinho",
        data: () => ({
            dialog: false,
            dialogConfirm: false,
        }),

        methods:{

            fazerPedido(){
                alert("Pedido feito com sucesso")
                this.$store.commit('limparCarrinho')
                this.dialogConfirm = false
            }

        }
    }
</script>

<style >

.v-dialog .v-overlay__content{
    max-width: calc(100% - 70%) !important;

}

#text-carrinho-vazio{
    font-size:25px;
}

</style>