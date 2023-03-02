import { defineStore } from "pinia"
import produse from '@/data/produse.json'
import categorii from '@/data/categorii.json'

export const useProduse = defineStore("produse", {
  state: () => {
    return { produse }
  },
  getters: {
    gasesteProdusDupaId(){
      return (id:number) => {
        return produse.filter( (produs:any) =>
          produs.idProdus == id)
      } 
    },
    returneazaCaleImagineDupaId(){
      return (id:number) => {
        console.log(produse.filter( (produs:any) => produs.idProdus == id)[0].cale)
        return produse.filter( (produs:any) => produs.idProdus == id)
      }
    }
  }
})