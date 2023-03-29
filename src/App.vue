<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <ModalCont v-if="date.accesareCont"/>
  <ModalVinde v-if="date.accesareVinde"/>
  <ModalFiltre v-if="date.accesareFiltre"/>
  <p>{{ date.dataTest }}</p>
</template>

<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import ModalCont from './components/ModalCont.vue'
  import ModalVinde from './components/ModalVinde.vue'
  import ModalFiltre from './components/ModalFiltre.vue'
  import { onMounted, onUnmounted } from 'vue'

  import { useData } from '@/stores/date.ts'

  const date = useData()
  onMounted(() => {
    date.reseteazaDate()
    date.returneazaDate()
  })

  onUnmounted(() => {
    
    console.log("dfgfd")
  })
</script>

<style lang="scss">

</style>


