import { defineStore } from "pinia"
import produse from '@/data/produse.json'
import categorii from '@/data/categorii.json'
import stari from '@/data/stari.json'
import judete from '@/data/judete.json'

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
    },
    returneazaStare(){
      return (idProdus:number) => {
        const idStare = produse.find( (produs:any) => produs.idProdus == idProdus)?.idStare
        return stari.find( (stare:any) =>  stare.idStare == idStare )?.stare
      }
    },
    returneazaJudet(){
      return (idProdus:any) => {
        const idJudet = produse.find( (produs:any) => produs.idProdus == idProdus)?.idJudet
        return judete.find( (judet:any) => judet.idJudet == idJudet)?.nume
      }
    }
  }
})