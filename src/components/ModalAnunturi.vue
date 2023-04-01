<template>
  <div @click.self="dbDate.accesareAnunturi = false"  class="backgroundModal">
    <div class="containerContinutModal">
      <div class="selectieAnunturi">
        <p class="labelAnunturi">Anunturi Publicate</p>
      </div>
      <div v-if="dbDate.logat == true" class="continutModal">
        <div class="containerAnunturi">
          <BaraAnunt v-for="produs in dbProduse.returneazaAnunturiDupaIdUtilizator(dbDate.idUtilizatorLogat)" :idProdus="produs.idProdus"/>
        </div>
      </div>
      <div v-else class="continutModal">
        <div class="containerAnunturi">
          <p class="avertisment">Anunturile publicate pot fi accesate doar de utilizatorii logati</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useData } from '@/stores/date.ts'
  import { useProduse } from '@/stores/produse.ts'
  import BaraAnunt from '@/components/BaraAnunt.vue'
  
  const dbDate = useData()
  const dbProduse = useProduse()
</script>

<style scoped>
  @import '@/css/ModalAnunturi.css';
</style>