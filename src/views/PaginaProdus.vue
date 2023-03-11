<template>
  <div class="containerInfomratiiProdusSiVanzator">
    <div class="containerProdus">
      <img class="produs" :src="require('@/assets/pozeProduse/' + dbPozeProduse.returneazaCalaImagineDupaId($route.params.id, imagine))" alt="imgProdus">
      <div class="containerPoze">
        <div @click="schimbaImagine(index-1)" v-for="index in dbPozeProduse.returneazaObiectPozeProdusDupaId($route.params.id).length" class="containerPoza">
          <img  :src="require('@/assets/pozeProduse/' + dbPozeProduse.returneazaObiectPozeProdusDupaId($route.params.id)[index - 1].cale)" alt="img">
        </div>
      </div>
    </div>
    <div class="containerInformatii">
      <div class="containerCuloareNegru">
        <div class="containerInformatiiProfil">
            <img :src="require('@/assets/pozeProfil/' + dbUtilizatori.returneazaPozaProfilDupaId(dbProduse.returneazaIdUtilizatorDupaProdus($route.params.id)))" alt="imgProfil">
          <div class="containerAlteInformatii">
            <p class="numePrenumeUtilizator"> Utilizator: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus($route.params.id))[0].nume }} {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus($route.params.id))[0].prenume }}</p>
            <p class="numeTel">Telefon: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus($route.params.id))[0].telefon }}</p>
            <p class="email">Email: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus(dbProduse.returneazaIdUtilizatorDupaProdus($route.params.id))[0].email }}</p>
          </div>
        </div>
        <div class="containerInformatiiProdus">
          <p> Produs: {{ dbProduse.gasesteProdusDupaId($route.params.id)[0].nume }}</p>
          <p> Pret: {{ dbProduse.gasesteProdusDupaId($route.params.id)[0].pret }} lei</p>
        </div>
        <div class="containerTaguri">
          <div class="containerCuloareNegru">
            <p class ="tag" v-if="dbTaguri.returneazaProdus($route.params.id).promovat"> Promovat </p>
            <p class="tag"> {{ dbTaguri.returneazaTagCategorie($route.params.id) }} </p>
            <p class="tag"> {{ dbTaguri.returneazaStare($route.params.id) }}</p>
            <p class="tag"> {{ dbTaguri.returneazaJudet($route.params.id) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="containerDescriereProdus">
    <p class="labelDescriere">Descriere:</p>
    <p class="descriere"> {{ dbProduse.returneazaDescriere($route.params.id) }}</p>
  </div>
  <div class="containerAlteProduse">
    <p class="labelAlteProduse">Alte produse de la acest utilizator</p>
    <BaraProduse tipBaraAnunturi="alteProduseVanzator"/>
  </div>
</template>

<script setup>
  import Card from '@/components/Card.vue'
  import BaraProduse from '@/components/BaraProduse.vue'
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