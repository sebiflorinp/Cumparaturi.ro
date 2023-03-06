import { defineStore } from "pinia"
import produse from '@/data/produse.json'
import categorii from '@/data/categorii.json'

export const useTaguri = defineStore("taguri", {
  getters:{
    returneazaTagCategorie(){
      return (idProdus:number) => {
        const idCategorie = produse.find( (produs:any) => produs.idProdus == idProdus)?.idCategorie
        return categorii.find( (categorie:any) => categorie.idCategorie == idCategorie)?.nume
      }
    },
    returneazaProdus(){
      return (idProdus:number) => {
        return produse.find( (produs:any) => produs.idProdus == idProdus)
      }
    }
  }
})