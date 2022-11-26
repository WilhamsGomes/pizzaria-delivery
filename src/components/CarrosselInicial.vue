<template>
    <v-carousel
        height="500"
        hide-delimiters
        progress="red"
        show-arrows="hover"
    >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
        >
            <v-sheet
                height="100%"
                color="#181717"
               
            >

                <div class="d-flex fill-height justify-center align-center">
                    <div>
                        <v-row>
                            <v-col cols="6" id="text-pizz" class="pl-16">
                                <v-card
                                    class="mx-auto"
                                    max-width="550"
                                    variant="text"
                                >
                                    <v-card-item>
                                        <div>
                                            <div class="text-overline mb-1 ">
                                                ENTREGA GRÁTIS
                                            </div>
                                            <div class="text-h2 mb-1 font-weight-bold">
                                                A melhor pizza de Recife
                                            </div>
                                            <div class="text-caption">
                                                Venha conhecer a pizza mais saborosa da região
                                            </div>
                                        </div>
                                    </v-card-item>

                                    <v-card-actions >
                                        <v-btn 
                                            variant="flat" 
                                            color="red" 
                                            class="ml-2"
                                        >
                                            Eu quero
                                        </v-btn>
                                    </v-card-actions>
                                    
                                </v-card>
                                <v-row class="d-flex align-center mt-12">
                                    <v-col class="d-flex align-center">
                                        <v-avatar color="red" class="d-flex ml-2" size="40">
                                            <v-icon>mdi-cart-outline</v-icon>
                                        </v-avatar>
                                        <p class="ml-2">Testando title</p>
                                    </v-col>
                                    
                                    <v-col class="d-flex align-center">
                                        <v-avatar color="red" class="d-flex ml-2" size="40">
                                            <v-icon>mdi-cart-outline</v-icon>
                                        </v-avatar>
                                        <p class="ml-2">Testando title</p>
                                    </v-col>

                                    <v-col class="d-flex align-center">
                                        <v-avatar color="red" class="d-flex ml-2" size="40">
                                            <v-icon>mdi-cart-outline</v-icon>
                                        </v-avatar>
                                        <p class="ml-2">Testando title</p>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6" >
                                <v-img src="https://pizzacesar.com.br/wp-content/uploads/2021/12/Layer-6.png"
                                    width="550"
                                >
                                </v-img>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name:"CarrosselInicial",
        data () {
            return {
                slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
                ],
            }
        },
    }
</script>

<style scoped>

.v-sheet {
    color: white !important;
}




</style>