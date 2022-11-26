<template>
    <v-app-bar app
        :elevation="0" 
        color="#181717" 
        class="d-flex align-center" 
    >
        <v-app-bar-nav-icon>
            <v-avatar
                class="mr-10 ml-16"
                size="48"
            >
                <v-img 
                    src="https://static.vecteezy.com/system/resources/previews/008/480/739/original/pizza-icon-simple-colored-pizza-icon-pizza-logo-free-png.png"
                />
            </v-avatar>
        </v-app-bar-nav-icon>
        <v-spacer>
        </v-spacer>
       
        <v-btn
            v-for="link in links"
            :key="link"
            variant="text"
            outlined
            color="white"
            class="text-body-2 font-weight-medium"
            flat
        >
          {{ link }}
        </v-btn>
        
        <v-spacer></v-spacer>

        <v-btn 
            icon 
            color="red"
            class="mr-16"
        >
            <v-badge  offset-y="0" offset-x="-2" color="white" :content="$store.state.quantItems">
                <v-icon>mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>
    </v-app-bar>
</template>

<script>

    export default {
        name:"SideBar",
        data: () => ({
            links: [
                'Cardápio',
                'Localização',
                'Sobre nós',
                'Contato',
            ],
            quantItems: 0,
            
        }),

        methods:{
            
        }
        
    }
</script>

<style>


</style>