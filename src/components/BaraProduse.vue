<template>
  <div v-if="tipBaraAnunturi == 'categorii'" class="containerCard">
    <Card v-for="index in nrCarduri" tip = "categorie" :idCategorie ="dbCategorii.categoriePopulara(index - 1)"/>
  </div>
  <div v-else-if="tipBaraAnunturi == 'produsePromovate'" class="containerCard">
    <Card v-for="index in nrCarduri" tip = "produs" :idProdus ="dbProduse.returneazaAnunturiPromovate()[index-1].idProdus"/>
  </div>
  <div v-else-if="tipBaraAnunturi == 'alteProduseVanzator'" class="containerCard">
    <Card v-for="index in nrCarduri" tip = "produs" :idProdus ="dbUtilizatori.returneazaCelelalteProduseUtilizator($route.params.id).length >= index ? dbUtilizatori.returneazaCelelalteProduseUtilizator($route.params.id)[index-1].idProdus : 'nimic' "/>
  </div>
  <div v-else class="containerCard">
    <Card v-for="index in nrCarduri" tip = "produs" :idProdus ="dbProduse.returneazaAnunturiRecente()[index-1].idProdus"/>
  </div>
</template>

<script setup>
  import Card from './Card.vue';
  import { useCategorii } from '@/stores/categorii'
  import { useProduse } from '@/stores/produse'
  import { useUtilizatori } from '@/stores/utilizatori'

  import { ref, computed, onMounted } from 'vue'

  const dbCategorii = useCategorii()
  const dbProduse = useProduse()
  const dbUtilizatori = useUtilizatori()

  const nrCarduri = ref(5)

  onMounted( () => {
    window.addEventListener("resize", updateazaMarimi)
    updateazaMarimi()
  })

  function updateazaMarimi(){
    if(32 + nrCarduri.value*176 + 90*(nrCarduri.value - 1) > window.innerWidth){
      while(32 + nrCarduri.value*176 + 90*(nrCarduri.value - 1) > window.innerWidth)
        nrCarduri.value--
    }
    else if(32 + nrCarduri.value*176 + 90*(nrCarduri.value - 1) < window.innerWidth - 176 - 90) {
      while(32 + nrCarduri.value*176 + 90*(nrCarduri.value - 1) < window.innerWidth - 176 - 90)
        nrCarduri.value++
    }
  }
  const props = defineProps(['tipBaraAnunturi'])
</script>

<style scoped>
  @import '../css/BaraProduse.css';
</style>

