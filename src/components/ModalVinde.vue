<template>
  <div @click.self="dbDate.accesareVinde = false" class="backgroundModal">
    <div class="containerContinutModal">
      <div class="labele">
        <p class="labelAdaugareProdus">Adaugare produs</p>
      </div>
      <div v-if="dbDate.logat == false" class="containerAdaugareInformatii">
        <p class="mesajAvertizare">Doar utilizatorii logati pot sa vanda produse</p>
      </div>
      <div v-else-if="!anuntPublicat" class="containerAdaugareInformatii">
        <p>Nume:</p>
        <input v-model="numeProdus" type="text">
        <p>Categorie:</p>
        <div class="containerTaguri containerCategorii">
          <p @click="indexCategorieSelectata = indexCategorie + 1" v-for="(tagCategorie, indexCategorie) in dbDate.categorii" class="tag" :class="indexCategorie == indexCategorieSelectata - 1 ? 'activ' : ''">{{ tagCategorie.nume }}</p>
        </div>
        <p>Stare:</p>
        <div class="containerTaguri containerStari">
          <p @click="indexStareSelectat = indexStare + 1" v-for="(tagStare, indexStare) in dbDate.stari" class="tag" :class="indexStare == indexStareSelectat - 1 ? 'activ' : ''">{{ tagStare.stare}}</p>
        </div>
        <p>Judet:</p>
        <div class="containerTaguri containerJudete">
          <p @click="indexJudetSelectat = indexJudet + 1" v-for="(tagJudet, indexJudet) in dbDate.judete" class="tag" :class="indexJudet == indexJudetSelectat - 1 ? 'activ' : ''">{{ tagJudet.nume}}</p>
        </div>
        <div class="containerPromovat">
          <p>Promovat:</p>
          <input class="checkBox" type="checkbox" v-model="promovat" />
        </div>
        <p>Pret:</p>
        <input v-model="pretProdus" type="text">
        <p>Descriere:</p>
        <input v-model="descriereProdus" type="text">
        <p class="mesajAvertizare">{{ mesajAvertizare }}</p>
        <button @click="verficareDateProdus() == true ?  puneAnuntul() : mesajAvertizare = verficareDateProdus()" type="submit">Publica anunt</button>
      </div>
      <div v-else class="containerAdaugareInformatii">
        <p class="mesajFelicitare">Produsul a fost adaugat</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useData } from '@/stores/date.ts'
  import { useProduse } from '@/stores/produse.ts'

  import { ref } from 'vue'

  const dbDate = useData()
  const dbProduse = useProduse()

  const indexCategorieSelectata = ref(100)
  const indexStareSelectat = ref(100)
  const indexJudetSelectat = ref(100)

  const numeProdus = ref('')
  const pretProdus = ref('')
  const descriereProdus = ref('')
  const promovat = ref(false)
  const mesajAvertizare = ref()

  const anuntPublicat = ref(false)

  function verficareDateProdus(){
    if(numeProdus.value == '' || pretProdus.value == '' || descriereProdus.value == '')
      return "Trebuie completate toate campurile"
    if(indexCategorieSelectata.value == 100 || indexStareSelectat.value == 100 || indexJudetSelectat.value == 100)
      return "Trebuie selectata o optiune la camputile categorie, stare si judet"
    if(!/^\d+$/.test(pretProdus.value))
      return "Pretul poate contine doar cifre"
    return true
  }

  function puneAnuntul(){
    anuntPublicat.value = true
    dbProduse.adaugaProdus(numeProdus.value, promovat.value, indexCategorieSelectata.value, pretProdus.value, indexStareSelectat.value, indexJudetSelectat.value, descriereProdus.value)
  }
</script>

<style>
  @import '@/css/ModalVinde.css';
</style>