<template>
  <router-link :to="idProdus ? '/produs/' + idProdus : {name: 'Cautare'}">
      <div v-if="tip == 'categorie'" class="card">
        <img :src="require('@/assets/categorii/' + dbCategorii.returneazaDateCategorieDupaId(idCategorie).cale)" alt="img">
        <p class="text"> {{ dbCategorii.returneazaDateCategorieDupaId(idCategorie).nume }} </p>
      </div>
      <div v-else-if="idProdus !== 'nimic'" class="card">
        <img :src="require('@/assets/produse/' + dbProduse.returneazaProdusDupaId(idProdus).cale)" alt="img">
        <p class="text">{{ dbProduse.returneazaProdusDupaId(idProdus).nume }}</p>
        <p class="text"> {{ dbProduse.returneazaProdusDupaId(idProdus).pret }} lei </p>
      </div>
  </router-link>
</template>

<script setup>
  import { useCategorii } from '@/stores/categorii'
  import { useProduse } from '@/stores/produse'
  import { useData } from '@/stores/date.ts'
  import { ref } from 'vue'

  const props = defineProps(['tip', 'idCategorie', 'idProdus'])
  
  const dbCategorii = useCategorii()
  const dbProduse = useProduse()
  const dbDate = useData()

</script>


<style scoped>
  @import '../css/Card.css';
</style>