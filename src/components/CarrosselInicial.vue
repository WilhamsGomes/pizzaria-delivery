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
                    <div class="d-flex justify-center align-center">
                        <v-col cols="12" md="6" id="text-pizz" class="pl-16">
                                <v-card
                                    class="mx-auto"
                                    max-width="550"
                                    variant="text"
                                >
                                    <v-card-item>
                                        <div>
                                            <div class="text-overline mb-1 ">
                                                {{slide.subtitle}}
                                            </div>
                                            <div class="text-h2 mb-1 font-weight-bold">
                                                {{slide.title}}
                                            </div>
                                            <div class="text-caption">
                                                {{slide.frase}}
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
                                <v-row class="d-flex align-center justify-center mt-12">
                                    <v-col class="d-flex align-center ">
                                        <v-avatar color="red" class="d-flex ml-2" size="40">
                                            <v-icon>mdi-cart-outline</v-icon>
                                        </v-avatar>
                                        <p class="ml-2">Peça online</p>
                                    </v-col>
                                    
                                    <v-col class="d-flex align-center">
                                        <v-avatar color="red" class="d-flex ml-2" size="40">
                                            <v-icon>mdi-home-circle-outline</v-icon>
                                        </v-avatar>
                                        <p class="ml-2">Receba em casa</p>
                                    </v-col>

                                    <v-col class="d-flex align-center">
                                        <v-avatar color="red" class="d-flex ml-2" size="40">
                                            <v-icon>mdi-food-fork-drink</v-icon>
                                        </v-avatar>
                                        <p class="ml-2">Experimente</p>
                                    </v-col>
                                </v-row>
                        </v-col>
                        <v-col cols="3" md="6" id="img-pizza">
                                <v-img :src="slide.imgSrc"
                                    width="550"
                                >
                                </v-img>
                        </v-col>
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
                    {
                        subtitle:"Entrega grátis",
                        title:"A melhor pizza de Recife",
                        frase: "Venha conhecer a pizza mais saborosa da região",
                        imgSrc: "https://i.pinimg.com/originals/45/eb/98/45eb98c8637d591a1bde451eb1bce941.png"
                      
                    },
                    {
                        subtitle:"Promoções únicas",
                        title:"Black friday fora de época",
                        frase: "Venha aproveitar o menor preço da região",
                        imgSrc: "https://www.pizzariadiscovoador.com.br/site/wp-content/uploads/www.pizzariadiscovoador.com.br-pizzas-frango-com-catupiry.png"
                    },
                    {
                        subtitle:"Entrega grátis",
                        title:"Hoje merece uma pizza!",
                        frase: "Venha conhecer a pizza mais saborosa da região",
                        imgSrc: "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Foto-Pizza-PNG.png"
                    },
                ],
            }
        },
    }
</script>

<style scoped>

.v-sheet {
    color: white !important;
}

@media screen and (max-width: 800px){
    #img-pizza{
        display: none;
    }
}


</style>