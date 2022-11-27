<template>
    <NavBar />
    <CarrosselInicialVue/>
    <BarraPesquisar/>
    <CardCardapio/>
    <InfosDelivery/>
 
    <FooterComponent/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import CarrosselInicialVue from '@/components/CarrosselInicial.vue';
import CardCardapio from '@/components/CardCardapio.vue';
import BarraPesquisar from '@/components/BarraPesquisar.vue';
import InfosDelivery from '@/components/InfosDelivery.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
    name: 'HomeView',

    components: {
      NavBar,
      CarrosselInicialVue,
      CardCardapio,
      BarraPesquisar,
      InfosDelivery,
      FooterComponent,
    },
});
</script>
