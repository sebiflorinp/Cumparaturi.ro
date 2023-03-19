import { defineStore } from "pinia"
import { useData } from "./date"

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

    returneazaIdUtilizatorDupaProdus(){
      return (idProdus:number) => {
        return this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
      }
    }

  },

  actions: {
    adaugaProdus(nume:string, promovat:boolean, idCategorie:number, pret:number, idStare:number, idJudet:number, descriere:string){
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
      produsNou.idProdus = this.date.$state.produse.slice().reverse()[0].idProdus + 1
      produsNou.nume = nume
      produsNou.cale = 'pozaDefault.png'
      produsNou.promovat = promovat
      produsNou.idCategorie = idCategorie
      produsNou.pret = pret
      produsNou.idUtilizator = this.date.$state.idUtilizatorLogat
      produsNou.idStare = idStare
      produsNou.idJudet = idJudet
      produsNou.descriere = descriere
      this.date.produse.push(produsNou)

      const pozaNoua = {} as poza
      pozaNoua.idProdus = produsNou.idProdus
      pozaNoua.cale = 'pozaDefault.png'
      pozaNoua.idPoza = this.date.$state.pozeProduse.slice().reverse()[0].idPoza + 1
      this.date.pozeProduse.push(pozaNoua)
    }
  }
})