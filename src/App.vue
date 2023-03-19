<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <ModalCont v-if="date.accesareCont"/>
  <ModalVinde v-if="date.accesareVinde"/>
  <ModalFiltre v-if="date.accesareFiltre"/>
</template>

<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ModalCont from './components/ModalCont.vue'
  import ModalVinde from './components/ModalVinde.vue'
  import ModalFiltre from './components/ModalFiltre.vue'

  import { useData } from '@/stores/date.ts'

  const date = useData()
</script>

<style lang="scss">

</style>
