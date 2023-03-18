<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <ModalCont v-if="date.accessareCont"/>
</template>

<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ModalCont from './components/ModalCont.vue'

  import { useData } from '@/stores/date.ts'

  const date = useData()
</script>

<style lang="scss">

</style>
