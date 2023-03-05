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
        return produse.filter( (produs:any) => produs.idProdus == id)
      }
    },
    returneazaAnunturiPromovate(){
      return () => {
        return produse.filter( (produs:any) => produs.promovat == true).reverse()
      }
    },
    returneazaAnunturiRecente(){
      return () => {
        return produse.slice().reverse()
      }
    }
  }
})