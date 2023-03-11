<template>
  <router-link :to="idProdus ? '/produs/' + idProdus : '/categorie/' + idCategorie">
      <div v-if="tip == 'categorie'" class="card">
        <img :src="require('@/assets/categorii/' + dbCategorii.returneazaCaleDupaId(idCategorie))" alt="img">
        <p class="text"> {{ dbCategorii.gasesteCategorie(idCategorie) }} </p>
      </div>
      <div v-else-if="idProdus !== 'nimic'" class="card">
        <img :src="require('@/assets/produse/' + dbProduse.returneazaCaleImagineDupaId(idProdus)[0].cale)" alt="img">
        <p class="text">{{ dbProduse.gasesteProdusDupaId(idProdus)[0].nume }}</p>
        <p class="text"> {{ dbProduse.gasesteProdusDupaId(idProdus)[0].pret }} lei </p>
      </div>
  </router-link>
</template>

<script setup>
  import { useCategorii } from '@/stores/categorii'
  import { useProduse } from '@/stores/produse'
  import { ref } from 'vue'

  const props = defineProps(['tip', 'idCategorie', 'idProdus'])
  
  const dbCategorii = useCategorii()
  const dbProduse = useProduse()

</script>


<style scoped>
  @import '../css/Card.css';
</style>