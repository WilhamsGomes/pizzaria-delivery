<template>
    <NavBar />
    <CarrosselInicialVue/>
    <CardCardapio/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import CarrosselInicialVue from '@/components/CarrosselInicial.vue';
import CardCardapio from '@/components/CardCardapio.vue';

export default defineComponent({
    name: 'HomeView',

    components: {
      NavBar,
      CarrosselInicialVue,
      CardCardapio
    },
});
</script>
