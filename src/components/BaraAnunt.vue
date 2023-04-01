<template>
  <div class="containerBaraAnunt">
    <div class="informatiiAnunt">
      <img :src="require( '@/assets/produse/' + dbProduse.returneazaProdusDupaId(idProdus).cale)" alt="">
      <p class="numeAnunt">{{ dbProduse.returneazaProdusDupaId(idProdus).nume }}</p>
    </div>
    <button @click="dbDate.stergeProdus(idProdus)" class="butonStergere">Sterge anunt</button>
  </div>
</template>

<script setup>
  import { useProduse } from '@/stores/produse.ts'
  import { useData } from '@/stores/date.ts'

  const props = defineProps(['idProdus'])

  const dbDate = useData()
  const dbProduse = useProduse()

</script>

<style>
  @import '@/css/BaraAnunt.css';
</style>