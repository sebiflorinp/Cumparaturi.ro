import { defineStore } from "pinia"
import { addDoc, collection, doc, DocumentData, getDoc, getDocs, query } from "firebase/firestore"


import db from "@/firebase/index.js"


export const useData = defineStore("data", {
  state: () => {
    return {
      logat: false,
      accesareCont: false,
      accesareVinde: false,
      accesareFiltre: false,
      ceAmCautat: '',
      idUtilizatorLogat: 0,
      dataTest: null,
      dateAdaugate:false,
      categorii: [],
      judete: [],
      pozeProduse: [],
      produse: [],
      stari: [],
      utilizatori: []     
    }
  },
  getters: {

  },
  actions: {
    async returneazaDate(){
        const docData = await getDocs(query(collection(db,'produse')))
        docData.forEach((doc) => {
          let produs:any = doc.data()
          this.produse.push(produs)
        }) 
        const dataCategorii= await getDocs(query(collection(db,'categorii')))
        dataCategorii.forEach((categorie) => {
          let categorieNoua:any = categorie.data()
          this.categorii.push(categorieNoua)
        })
        const dataJudete = await getDocs(query(collection(db,'judete')))
        dataJudete.forEach((judet)=>{
          let judetNou:any = judet.data()
          this.judete.push(judetNou)
        })
        const dataPozeProduse = await getDocs(query(collection(db,'pozeProduse')))
        dataPozeProduse.forEach((pozaProdus) => {
          let pozaProduseNou:any = pozaProdus.data()
          this.pozeProduse.push(pozaProduseNou)
        })
        const dataStari = await getDocs(query(collection(db,'stari')))
        dataStari.forEach((stare)=> {
          let stareNou:any = stare.data()
          this.stari.push(stareNou)
        })
        const dataUtilizatori = await getDocs(query(collection(db,'utilizatori')))
        dataUtilizatori.forEach((utilizator) => {
          let utilizatorNou:any = utilizator.data()
          this.utilizatori.push(utilizatorNou)
        })      
      },
      reseteazaDate(){
        this.produse = []
        this.categorii = []
        this.judete = []
        this.pozeProduse = []
        this.stari = []
        this.utilizatori = []
      }
  },
    persist: false
})