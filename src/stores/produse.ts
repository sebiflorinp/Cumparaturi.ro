import { defineStore } from "pinia"
import { useData } from "./date"

import { addDoc, collection, doc, DocumentData, getDoc, getDocs, query } from "firebase/firestore"


import db from "@/firebase/index.js"

export const useProduse = defineStore("produse", {
  state: () => {
    const date = useData()
    return { date }
  },

  getters: {

    returneazaProdusDupaId(){
      return (id:number) => {
        return this.date.$state.produse.find( (produs:any) => produs.idProdus == id)
      }
    },

    returneazaPozeProdusDupaId(){
      return (id:number) => {
        return this.date.$state.pozeProduse.filter( (poza:any) => poza.idProdus == id)
      }
    },

    returneazaAnunturiPromovate(){
      return () => {
        return this.date.$state.produse.filter( (produs:any) => produs.promovat == true).reverse()
      }
    },

    returneazaAnunturiRecente(){
      return () => {
        return this.date.$state.produse.slice().reverse()
      }
    },

    returneazaAnunturiDupaIdUtilizator(){
      return (idUtilizator:number) => {
        return this.date.$state.produse.filter((produs) =>{ 
          if(produs.idUtilizator == idUtilizator){
            return true
          }
        })
      }
    },

    returneazaIdUtilizatorDupaProdus(){
      return (idProdus:number) => {
        return this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
      }
    }

  },

  actions: {
    async adaugaProdus(nume:string, promovat:boolean, idCategorie:number, pret:number, idStare:number, idJudet:number, descriere:string){
      interface produs {
        idProdus:number
        nume:string
        cale:string
        promovat:boolean
        idCategorie:number
        pret:number
        idUtilizator:number
        idStare:number
        idJudet:number
        descriere:string
      }

      interface poza {
        idProdus:number
        cale:string
        idPoza:number
      }
      const produsNou = {} as produs
      let idMax=0;
      this.date.produse.forEach((produs) => {
        if(produs.idProdus>idMax){
          idMax = produs.idProdus
        }
      })
      produsNou.idProdus = idMax + 1
      produsNou.nume = nume
      produsNou.cale = 'pozaDefault.png'
      produsNou.promovat = promovat
      produsNou.idCategorie = idCategorie
      produsNou.pret = pret
      produsNou.idUtilizator = this.date.$state.idUtilizatorLogat
      produsNou.idStare = idStare
      produsNou.idJudet = idJudet
      produsNou.descriere = descriere
      const colRef = collection(db,'produse')
      addDoc(colRef,produsNou)
      interface pozaProdus{
        cale:string
        idPoza:number
        idProdus:number
      }
      let pozaProdusNoua = {} as pozaProdus
      pozaProdusNoua.cale = "pozaDefault.png"
      pozaProdusNoua.idProdus = idMax + 1
      pozaProdusNoua.idPoza = idMax + 2
      const colR = collection(db,'pozeProduse')
      addDoc(colR,pozaProdusNoua)
    }
  }
})