<template>
  <div @click.self="dbDate.accesareFiltre = false" class="backgroundModal">
    <div class="containerContinutModal">
      <div class="containerAlegeri">
        <p class="alegere">Adaugare filtre</p>
      </div>
      <div class="containerFiltre">
        <p class="labelFiltru">Categorii:</p>
        <div class="containerTaguri">
          <p @click="dbFiltre.schimbaStatutCategorieDupaId(categorieInactiva.idCategorie)" v-for="(categorieInactiva, indexCategorieInactiva) in dbFiltre.returneazaCategoriiInactive()" class="tag"> {{ categorieInactiva.nume }} </p>
        </div>
        <p class="labelFiltru">Stari:</p>
        <div class="containerTaguri">
          <p @click="dbFiltre.schimbaStatutStareDupaId(stareInactiva.idStare)" v-for="(stareInactiva, indexStareInactiva) in dbFiltre.returneazaStariInactive()" class="tag"> {{ stareInactiva.stare }}</p>
        </div>
        <p class="labelFiltru">Judete:</p>
        <div class="containerTaguri">
          <p @click="dbFiltre.schimbaStatutJudetDupaId(judetInactiv.idJudet)" v-for="(judetInactiv, indexJudetInactiv) in dbFiltre.returneazaJudeteInactive()" class="tag"> {{ judetInactiv.nume }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useFiltre } from '@/stores/filtre.ts'
  import { useData } from '@/stores/date.ts'

  const dbFiltre = useFiltre()
  const dbDate = useData()
</script>

<style>
  @import '@/css/ModalFiltre.css';
</style>