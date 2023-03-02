<template>
  <p> </p>
  <div v-if="this.tip == 'categorie'" class="card">
    <img src="@/assets/as.png" alt="img">
    <p class="text"> {{ dbCategorii.gasesteCategorie(idCategorie) }} </p>
  </div>
  <div @click="creste" v-else class="card">
    <img :src="require('@/assets/produse/' + dbProduse.returneazaCaleImagineDupaId(idProdus)[0].cale)" alt="img">
    <p class="text">{{ dbProduse.gasesteProdusDupaId(idProdus)[0].nume }}</p>
    <p class="text"> {{ dbProduse.gasesteProdusDupaId(idProdus)[0].pret }} </p>
  </div>
</template>

<script setup>
  import { useCategorii } from '@/stores/categorii'
  import { useProduse } from '@/stores/produse'
  import { ref } from 'vue'
  const props = defineProps(['tip', 'idCategorie', 'idProdus'])

  const dbCategorii = useCategorii()
  const dbProduse = useProduse()

  const cale = ref("1.webp")

</script>


<style scoped>
  @import '../css/Card.css';
</style>