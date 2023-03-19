<template>
  <div class="containerInfomratiiProdusSiVanzator">
    <div class="containerProdus">
      <img class="produs" :src="require('@/assets/pozeProduse/' + dbProduse.returneazaPozeProdusDupaId($route.params.id)[imagine].cale)" alt="imgProdus">
      <div class="containerPoze">
        <div @click="schimbaImagine(index-1)" v-for="index in dbProduse.returneazaPozeProdusDupaId($route.params.id).length" class="containerPoza">
          <img  :src="require('@/assets/pozeProduse/' + dbProduse.returneazaPozeProdusDupaId($route.params.id)[index - 1].cale)" alt="img">
        </div>
      </div>
    </div>
    <div class="containerInformatii">
      <div class="containerCuloareNegru">
        <div class="containerInformatiiProfil">
          <img :src="require('@/assets/pozeProfil/' + dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus($route.params.id).calePoza)" alt="imgProfil">
          <div class="containerAlteInformatii">
            <p class="numePrenumeUtilizator"> Utilizator: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus($route.params.id).nume }} {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus($route.params.id).prenume }}</p>
            <p class="numeTel">Telefon: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus($route.params.id).telefon }}</p>
            <p class="email">Email: {{ dbUtilizatori.returneazaInformatiiUtilizatorDupaIdProdus($route.params.id).email }}</p>
          </div>
        </div>
        <div class="containerInformatiiProdus">
          <p> Produs: {{ dbProduse.returneazaProdusDupaId($route.params.id).nume }}</p>
          <p> Pret: {{ dbProduse.returneazaProdusDupaId($route.params.id).pret }} lei</p>
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
    <p class="descriere"> {{ dbProduse.returneazaProdusDupaId($route.params.id).descriere }}</p>
  </div>
  <div class="containerAlteProduse">
    <p class="labelAlteProduse">Alte produse de la acest utilizator</p>
    <BaraProduse tipBaraAnunturi="alteProduseVanzator"/>
  </div>
</template>

<script setup>
  import Card from '@/components/Card.vue'
  import BaraProduse from '@/components/BaraProduse.vue'

  import { useProduse } from '@/stores/produse.ts'
  import { useUtilizatori } from '@/stores/utilizatori.ts'
  import { useTaguri } from '@/stores/taguri.ts'

  import { ref } from 'vue'

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