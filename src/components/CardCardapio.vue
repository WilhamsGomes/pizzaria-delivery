<template>
    <v-container class="d-flex flex-wrap">
        <v-card v-for="(item, key) in items" :key="key" :loading="loading" class="mx-auto my-12 rounded-shaped" max-width="374"  >
            <template v-slot:loader="{ isActive }">
                <v-progress-linear
                    :active="isActive"
                    color="deep-purple"
                    height="4"
                    indeterminate
                ></v-progress-linear>
            </template>

            <v-img
                cover
                height="180"
                :src="item.urlImg"
            ></v-img>

            <v-card-item>
                <v-card-title>{{item.titleProduct}}</v-card-title>

                <v-card-subtitle>
                    <span class="mr-1">{{item.subtitleProduct}}</span>
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

            <v-card-title>Tamanho</v-card-title>
            <div class="px-4">
                <v-chip-group v-model="selection">
                    <v-chip>P</v-chip>

                    <v-chip>M</v-chip>

                    <v-chip>G</v-chip>

                    <v-chip>GG</v-chip>
                </v-chip-group>
            </div>

            <v-card-title class="pt-4">Quantidade</v-card-title>
            <div class="d-flex  align-center ">
                <v-btn
                    variant="text"
                    icon="mdi-minus"
                    @click="model = Math.max(model - 1, 0)"
                ></v-btn>
                {{ model }}
                <v-btn
                    variant="text"
                    icon="mdi-plus"
                    @click="model = Math.min(model + 1, 10)"
                ></v-btn>
            </div>

            <v-card-actions>
                <v-btn
                    color="deep-purple-lighten-2"
                    variant="text"
                    @click="reserve"
                >
                    Adicionar ao carrinho
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name:"CardCardapio",
        data: () => ({
            loading: false,
            selection: 1,
            model: 0,
            items: [
                {   
                    urlImg: "https://www.sabordasreceitas.com.br/wp-content/uploads/2021/09/Receita-de-pizza-de-calabresa-facil.jpg",
                    titleProduct: "Pizza Calabresa",
                    subtitleProduct: "Sem borda",
                    rating: 4.9,
                    numberRating: 153,
                    subtitle2Product: "$ • Massas, Pizza",
                    descricaoProduct: "Pizza calabresa, sem borda. Com orégano, mussarela, queijo extra e molho da casa.",
                },
                {   
                    urlImg: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                    titleProduct: "Cafe Badilico",
                    subtitleProduct: "Local Favorite",
                    rating: 4.5,
                    numberRating: 413,
                    subtitle2Product: "$ • Italian, Cafe",
                    descricaoProduct: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
                },
                {   
                    urlImg: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                    titleProduct: "Cafe Badilico",
                    subtitleProduct: "Local Favorite",
                    rating: 4.5,
                    numberRating: 413,
                    subtitle2Product: "$ • Italian, Cafe",
                    descricaoProduct: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
                },
                {   
                    urlImg: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
                    titleProduct: "Cafe Badilico",
                    subtitleProduct: "Local Favorite",
                    rating: 4.5,
                    numberRating: 413,
                    subtitle2Product: "$ • Italian, Cafe",
                    descricaoProduct: "Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.",
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
    max-width: 230px;
}

</style>