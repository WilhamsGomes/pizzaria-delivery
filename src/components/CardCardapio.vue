<template>
    <div>
        <TitlePage txtTitle="Destaques" class="mt-8"/>
        <v-sheet class="mx-auto" elevation="0">
            <v-slide-group  class="pa-4 mt-2 mb-8" selected-class="bg-success" show-arrows >
                <v-slide-group-item
                    v-for="(item, key) in items" 
                    :key="key"
                >
                    <v-card  
                        :loading="loading" 
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

                        <v-card-item>
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
                                @click="reserve"
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
            loading: false,
            selection: 1,
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
                
                
            ],
        }),

        methods: {
            reserve () {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
            },
        },
    }
</script>

<style scoped>

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

</style>