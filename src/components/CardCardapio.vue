<template>
    <div>
        <TitlePage txtTitle="Destaques" class="mt-8"/>
        <v-alert  
            v-if="alertShow"
            type="success" 
            max-width="40%" height="30" 
            id="alert-item" 
            class="d-flex align-center justify-center"
        >
        Item adicionado ao carrinho.
        </v-alert>
        <v-sheet class="mx-auto" elevation="0">
            <v-slide-group  class="pa-4 mt-2 mb-8" selected-class="bg-success" show-arrows >
                <v-slide-group-item
                    v-for="(item, key) in items" 
                    :key="key"
                >
                    <v-card  
                        class="ml-4 mr-4 mb-4 rounded-lg card-hover" 
                        max-width="300" max-height="550" 
                        elevation="1" 
                        color="white"
                    >
                        <v-img
                            cover
                            height="180"
                            :src="item.urlImg"
                        ></v-img>

                        <v-card-item >
                            <v-card-title class="font-weight-bold">{{item.titleProduct}} </v-card-title>
                            <v-card-subtitle>
                                <span class="mr-1 font-weight-bold">R$ {{item.priceProduct}}</span>
                            </v-card-subtitle>
                        </v-card-item>
                        

                        <v-card-text>
                            <v-row align="center" class="mx-0">
                                <v-rating
                                    :model-value="item.rating"
                                    color="amber"
                                    density="compact"
                                    half-increments
                                    readonly
                                    size="small"
                                ></v-rating>

                                <div class="text-grey ms-4">
                                    {{item.rating}} ({{item.numberRating}})
                                </div>
                            </v-row>

                            <div class="my-4 text-subtitle-1">
                                {{item.subtitle2Product}}
                            </div>

                            <div id="descriptionProduct">{{item.descricaoProduct}}</div>
                        </v-card-text>

                        <v-divider class="mx-4 mb-1"></v-divider>

                        <div class="d-flex align-center">
                            <div>
                                <v-card-title>Tamanho</v-card-title>
                                <div class="px-4">
                                    <v-chip-group v-model="item.selectionTamanho"  active-class="border" >
                                        <v-chip>P</v-chip>

                                        <v-chip>M</v-chip>

                                        <v-chip>G</v-chip>
                                    </v-chip-group>
                                </div>
                            </div>
                        
                            <div>
                                <v-card-title class="pt-4">Quantidade</v-card-title>
                                <div class="d-flex  align-center ">
                                    <v-btn
                                        variant="text"
                                        icon="mdi-minus"
                                        @click="item.quantityProduct = Math.max(item.quantityProduct - 1, 0)"
                                    ></v-btn>
                                    {{ item.quantityProduct }}
                                    <v-btn
                                        variant="text"
                                        icon="mdi-plus"
                                        @click="item.quantityProduct = Math.min(item.quantityProduct + 1, 10)"
                                    ></v-btn>
                                </div>
                            </div>
                        </div>
                        
                        <v-card-actions>
                            <v-btn
                                id="button-cardapio"
                                color="red"
                                variant="flat"
                                @click="addCarinho(item)"
                                width="80%"
                            >
                                Adicionar ao carrinho
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>

    import TitlePage from './TitlePage.vue';

    export default {
        name:"CardCardapio",
        components: {
            TitlePage
        },
        data: () => ({
            selection: 1,
            alertShow: false,
            model: 0,
            items: [
                {   
                    urlImg: "https://www.sabordasreceitas.com.br/wp-content/uploads/2021/09/Receita-de-pizza-de-calabresa-facil.jpg",
                    titleProduct: "Pizza Calabresa",
                    priceProduct: 45.90,
                    rating: 4.9,
                    numberRating: 153,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza calabresa, sem borda. Com orégano, mussarela, queijo extra e molho da casa.",
                    quantityProduct: 0,   
                    selectionTamanho: null,             
                },
                {   
                    urlImg: "https://www.pizzariacaselatto.com.br/wp-content/uploads/2015/11/Pizza-de-portuguesa1.jpg",
                    titleProduct: "Pizza Portuguesa",
                    priceProduct: 55.90,
                    rating: 4.8,
                    numberRating: 121,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza portuguesa, com borda. Com orégano, palmito, presunto, ervilha e presunto.",
                    quantityProduct: 0,   
                    selectionTamanho: null,             
                },
                {   
                    urlImg: "https://img.itdg.com.br/tdg/images/blog/uploads/2018/04/pizza-de-frango-com-catupiri-receita.jpg?w=1200",
                    titleProduct: "Pizza Frango com Catupiry",
                    priceProduct: 59.90,
                    rating: 4.8,
                    numberRating: 213,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza de frango com catupiry. Com requeijão, queijo mussarela, orégano e tomate. ",
                    quantityProduct: 0,   
                    selectionTamanho: null,             
                },
                {   
                    urlImg: "https://claudia.abril.com.br/wp-content/uploads/2020/02/pizza-quatro-queijos-comitc3aa-umami.jpg",
                    titleProduct: "Pizza Quatro queijos",
                    priceProduct: 49.90,
                    rating: 4.8,
                    numberRating: 111,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza de quatro queijos. Com orégano, mussarela, catupiry, provolone e parmesão.",
                    quantityProduct: 0,   
                    selectionTamanho: null,             
                },
                {   
                    urlImg: "data:image/jpeg;base64,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",
                    titleProduct: "Pizza Brigadeiro",
                    priceProduct: 54.90,
                    rating: 5.0,
                    numberRating: 93,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza doce de brigadeiro. Com morango, chocolate quente, brigadeiro puro e ingrediente da casa.",
                    quantityProduct: 0,   
                    selectionTamanho: null,             
                },
                {   
                    urlImg: "https://receitinhas.com.br/wp-content/uploads/2022/04/Pizza-de-Roemu-e-Julieta-Imagem-por-Restaurante-Braseiro-730x365.jpg",
                    titleProduct: "Pizza Romeu e Julieta",
                    priceProduct: 61.90,
                    rating: 4.9,
                    numberRating: 121,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza Romeu e Julieta. Com orégano, brie, ricota, goiabada e salgado do queijo.",
                    quantityProduct: 0,   
                    selectionTamanho: null,             
                },
                
                
            ],
            product: {},
        }),

        methods: {

            addCarinho (item) { 

                if((item.selectionTamanho || item.selectionTamanho == 0) && item.quantityProduct){
                    const elementos = document.querySelectorAll('.v-chip')

                    for(var x=0; x < elementos.length; x++){
                        elementos[x].classList.remove('v-chip--selected')
                    }

                    this.$store.dispatch('adicionarProducAction', item)
                    //this.$store.commit("addProductInCar", item )

                    this.alertShow = true
                    setTimeout(()=>{
                        this.alertShow = false                        
                    }, 2500)
                    
                } else {
                    alert("Informe o tamanho e quantidade desejada")
                }
            },
        },


    }
</script>

<style>

#descriptionProduct{
    text-align: justify;
}

#button-cardapio{
    margin: 0 auto !important;
}

.border{
    margin-left: 8px;
    margin-right: 8px;
    background: #704232;
    border-radius: 20px;
    text-decoration: none;
}

.v-chip--selected{
    background-color: red !important;
    color: white;
}

.card-hover{
    transition: 0.15s ease-in-out;
}

.card-hover:hover{
    transform: scale(1.05);
}

#alert-item{
    margin: 0 auto !important;
}

.v-alert__prepend{
    align-self:inherit !important;
}

</style>