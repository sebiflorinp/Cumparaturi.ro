import { defineStore } from "pinia"
import { useData } from "./date"

import { addDoc, collection, doc, DocumentData, getDoc, getDocs, query } from "firebase/firestore"


import db from "@/firebase/index.js"

export const useUtilizatori = defineStore("utilizatori", {
  state: () => {
    const date = useData()
    return { date }
  },

  getters: {

    returneazaInformatiiUtilizatorDupaId(){
      return (idUtilizator:number) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => 
          utilizator.idUtilizator == idUtilizator
        )
      }
    },

    returneazaInformatiiUtilizatorDupaIdProdus(){
      return (idProdus:number) => {
        const idUtilizator = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.idUtilizator == idUtilizator)
      }
    },

    returneazaPozaProfilDupaId(){
      return (idUtilizator:number) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.idUtilizator == idUtilizator)?.calePoza
      }
    },

    returneazaCelelalteProduseUtilizator(){
      return (idProdus:number) => {
        const idUtilizator = this.date.$state.produse.find( (produs:any) => produs.idProdus == idProdus)?.idUtilizator
        return this.date.$state.produse.filter( (produs:any) => {
          if(produs.idUtilizator == idUtilizator && produs.idProdus != idProdus) return produs 
        })
      }
    },

    verificareDateLogare(){
      return (email:string, parola:string) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.email == email && utilizator.parola == parola) ? true : false
      }
    },
    verificaEmailDisponibil(){
      return (email:string) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.email == email) ? false : true
      }
    },
    returneazaIdUtilizatorDupaEmail(){
      return (email:string) => {
        return this.date.$state.utilizatori.find( (utilizator:any) => utilizator.email == email).idUtilizator
      }
    }
  },

  actions: {
    creareCont(nume:string, prenume:string, email:string, telefon:string, parola:string){  
        interface utilizator {
          idUtilizator: number
          nume: string
          prenume: string
          calePoza: string
          email: string
          telefon:string
          parola:string
        }
        const utilizatorNou = {} as utilizator
        let idUtilizatorMax = 0
        this.date.utilizatori.forEach((utilizator)=> {
          if(utilizator.idUtilizator>idUtilizatorMax){
            idUtilizatorMax = utilizator.idUtilizator
          }
        })
        utilizatorNou.idUtilizator = idUtilizatorMax + 1
        utilizatorNou.nume = nume
        utilizatorNou.prenume = prenume
        utilizatorNou.email = email
        utilizatorNou.telefon = telefon
        utilizatorNou.parola = parola
        utilizatorNou.calePoza = "defaultPhoto.jpg"
        const colRef = collection(db,'utilizatori')
        addDoc(colRef,utilizatorNou)
      }
    }
  }
)