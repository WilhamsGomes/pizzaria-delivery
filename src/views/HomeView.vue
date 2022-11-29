<template>
    <div>
      <NavBar/>
      <CarrosselInicialVue/>
      <BarraPesquisar/>
      <CardCardapio/>
      <InfosDelivery/>
      <FormContact/>
      <FooterComponent/>
    </div>
</template>

<script>

  // Components
  import NavBar from '@/components/NavBar.vue';
  import CarrosselInicialVue from '@/components/CarrosselInicial.vue';
  import CardCardapio from '@/components/CardCardapio.vue';
  import BarraPesquisar from '@/components/BarraPesquisar.vue';
  import InfosDelivery from '@/components/InfosDelivery.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import FormContact from '@/components/FormContact.vue';

  export default {
      name: 'HomeView',

      components: {
        NavBar,
        CarrosselInicialVue,
        CardCardapio,
        BarraPesquisar,
        InfosDelivery,
        FooterComponent,
        FormContact
      },
  };
</script>
