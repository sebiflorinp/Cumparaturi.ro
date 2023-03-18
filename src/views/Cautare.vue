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
      <button>Adauga filtre</button>
      <div class="backgroundFiltre">
        <div class="filtru filtruPret">
          <p class="labelFiltru labelPret">Pret</p>
          <div class="containerPretMinPretMax">
            <div class="pretMin">
              <p class="labelPretMin">Pret minim:</p>
              <p class="pretMin"></p>
            </div>
            <div class="containerPretMax">
              <p class="labelPretMax">Pret maxim:</p>
              <p class="pretMax"></p>
            </div>
          </div>
        </div>
        <div class="filtru filtruCategorie">
          <p class="labelFiltru labelCategorie">Categorie</p>
          <div class="containerCategorii">
            <button @click="dbFiltre.activeazaSauDezactiveazaCategorie(index)" v-for="(categorie, index) in dbFiltre.returneazaCategoriiActive">{{ categorie.nume }}</button>
          </div>
          <p> {{ dbFiltre.pretMinim }} </p>
          <p> {{  dbFiltre.returneazaCategoriiActive }}</p>
        </div>
        <div class="filtru filtruConditie">
          <p class="labelFiltru labelConditie">Conditie</p>
        </div>
        <div class="filtru filtruJudet">
          <p class="labelFiltru labelJudet">Judet</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="containerProduseSiOrdonare">
        <div class="containerOrdonare">
          <p>Ordonare in functie de:</p>
          <div class="containerFormeDeOrdonare">
            <button class="butonDupaPret">Dupa pret ↑</button>
            <button class="butonDupaDupaAnuntului">Dupa data ↑</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
  import BaraCautare from '@/components/BaraCautare.vue'
  import { useFiltre } from '@/stores/filtre.ts'
  import { ref } from 'vue'

  const nr = ref(1)

  function creste(id){
    nr.value = id
  }

  const dbFiltre = useFiltre()
</script>


<style>
  @import '../css/cautare.css';
</style>