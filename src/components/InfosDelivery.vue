<template>
    <div>
        <TitlePage txtTitle="Delivery"/>
        <v-list flat class="mt-4">
            <v-list-item-group class="d-flex align-items justify-center flex-wrap">
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-card  color="white" max-width="220" max-height="260" class="rounded-lg ml-2 mr-2 mb-4" elevation="1">
                        <v-avatar size="80" class="d-block text-center mx-auto mt-4">
                            <v-icon color="red" size="80">mdi-truck-delivery-outline</v-icon>
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title align="center" class="mt-3">{{item.text}}</v-list-item-title>
                        </v-list-item-content>
                        <v-card-text class="text--grey text-justify ">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                        </v-card-text>
                    </v-card>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>

<script>

import TitlePage from './TitlePage.vue';

export default {
    name: "InfosDelivery",
    components: {
        TitlePage
    },
    data(){
        return{
            items: [
                {icon:'fas fa-home', text: 'Order'},
                {icon:'fas fa-hamburger', text: 'Payment'},
                {icon:'fas fa-history', text: 'Delivery'},
                {icon:'fas fa-wallet', text: 'Packaging'},
            ],
        }
    },
 
}
</script>
