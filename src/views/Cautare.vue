<template>
  <div class="containerAnunt">
    <p class="textAnunt">Anunturi</p>
  </div>
  <div class="containerBaraDeCautare">
    <BaraCautare></BaraCautare>
  </div>
  <div class="containerRezultat">
    <p class="aiCautat">Ai cautat:</p>
    <p class="rezultat">"{{ $route.params.ceAmCautat }}"</p>
  </div>
  <div class="containerFiltreSiAnunturi">
    <div class="filtre">
      <p class="labelFiltre">Filtre</p>
      <button @click="dbDate.accesareFiltre = true">Adauga filtre</button>
      <div class="backgroundFiltre">
        <div class="filtru filtruPret">
          <p class="labelFiltru labelPret">Pret</p>
          <div class="containerPretMinPretMax">
            <div class="containerPret">
              <p class="labelPretMin">Pret minim:</p>
              <input v-model="pretMin" class="pret" type="number">
            </div>
            <div class="containerPret">
              <p class="labelPretMax">Pret maxim:</p>
              <input v-model="pretMax" class="pret" type="number">
            </div>
          </div>
        </div>
        <div class="filtru filtruCategorie">
          <p class="labelFiltru labelCategorie">Categorie</p>
          <div class="containerTaguri">
            <p @click="dbFiltre.schimbaStatutCategorieDupaId(categorieActiva.idCategorie)" v-for="(categorieActiva, indexCategorieActiva) in dbFiltre.returneazaCategoriiActive()" class="tag"> {{ categorieActiva.nume }} </p>
          </div>
        </div>
        <div class="filtru filtruConditie">
          <p class="labelFiltru labelConditie">Conditie</p>
          <div class="containerTaguri">
            <p @click="dbFiltre.schimbaStatutStareDupaId(stareActiva.idStare)" v-for="(stareActiva, indexStareActiva) in dbFiltre.returneazaStariActive()" class="tag"> {{ stareActiva.stare }}</p>
          </div>
        </div>
        <div class="filtru filtruJudet">
          <p class="labelFiltru labelJudet">Judet</p>
          <div class="containerTaguri">
            <p @click="dbFiltre.schimbaStatutJudetDupaId(judetActiv.idJudet)" v-for="(judetActiv, indexJudetActiv) in dbFiltre.returneazaJudeteActive()" class="tag"> {{ judetActiv.nume }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="containerAnunturi">
        <Card v-for="produs in dbFiltre.returneazaProduseFiltrate(pretMin,pretMax)" tip="produs" :idProdus="produs.idProdus"/>
      </div>
    </div>
  </div>

</template>

<script setup>
  import { useFiltre } from '@/stores/filtre.ts'
  import { useData } from '@/stores/date.ts'

  import { onUpdated, onMounted, onUnmounted, ref } from 'vue'

  import BaraCautare from '@/components/BaraCautare.vue'
  import Card from '@/components/Card.vue'


  const props = defineProps(['ceAmCautat'])

  const dbFiltre = useFiltre()
  const dbDate = useData()

  const pretMin = ref(1)
  const pretMax = ref(dbFiltre.returneazaPretMaxim())

  onMounted( () => {
    dbDate.ceAmCautat = props.ceAmCautat
    pretMax.value = dbFiltre.returneazaPretMaxim()
  })
  onUpdated( () => {
    dbDate.ceAmCautat = props.ceAmCautat

  })

  onUnmounted( () => {
    dbFiltre.resetareFiltreActive()
  })


</script>


<style>
  @import '../css/cautare.css';
</style>