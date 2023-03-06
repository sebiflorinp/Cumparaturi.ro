<template>
  <div class="containerInfomratiiProdusSiVanzator">
    <div class="containerProdus">
      <img class="produs" :src="require('@/assets/pozeProduse/' + dbPozeProduse.returneazaCalaImagineDupaId(this.$route.params.id, imagine))" alt="imgProdus">
      <div class="containerPoze">
        <div @click="schimbaImagine(index-1)" v-for="index in dbPozeProduse.returneazaObiectPozeProdusDupaId(this.$route.params.id).length" class="containerPoza">
          <img  :src="require('@/assets/pozeProduse/' + dbPozeProduse.returneazaObiectPozeProdusDupaId(this.$route.params.id)[index - 1].cale)" alt="img">
        </div>
      </div>
    </div>
    <div class="containerInformatii">
      <div class="containerCuloareNegru">
        <div class="containerInformatiiProfil">
            <img :src="require('@/assets/pozeProfil/' + dbUtilizatori.returneazaPozaProfilDupaId(dbProduse.returneazaIdUtilizatorDupaProdus(this.$route.params.id)))" alt="imgProfil">
          <div class="containerAlteInformatii">
            <p class="numePrenumeUtilizator"> Utilizator: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus(this.$route.params.id))[0].nume }} {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus(this.$route.params.id))[0].prenume }}</p>
            <p class="numeTel">Telefon: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus(this.$route.params.id))[0].telefon }}</p>
            <p class="email">Email: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus(this.$route.params.id))[0].email }}</p>
          </div>
        </div>
        <div class="containerInformatiiProdus">
          <p> Produs: {{ dbProduse.gasesteProdusDupaId(this.$route.params.id)[0].nume }}</p>
          <p> Pret: {{ dbProduse.gasesteProdusDupaId(this.$route.params.id)[0].pret }} lei</p>
        </div>
        <div class="containerTaguri">
          <div class="containerCuloareNegru">
            <p v-if="dbTaguri.returneazaProdus(this.$route.params.id).promovat"> Promovat </p>
            <p> {{ dbTaguri.returneazaTagCategorie(this.$route.params.id) }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Card from '@/components/Card.vue'
  import { usePozeProduse } from '@/stores/pozeProduse.ts'
  import { useProduse } from '@/stores/produse.ts'
  import { useUtilizatori } from '@/stores/utilizatori.ts'
  import { useTaguri } from '@/stores/taguri.ts'
  import { ref } from 'vue'

  const dbPozeProduse = usePozeProduse()
  const dbProduse = useProduse()
  const dbUtilizatori = useUtilizatori()
  const dbTaguri = useTaguri()

  const imagine = ref(0)
  
  function schimbaImagine(nr){
    imagine.value = nr
  }

</script>

<style>
  @import '@/css/paginaProdus.css';
</style>