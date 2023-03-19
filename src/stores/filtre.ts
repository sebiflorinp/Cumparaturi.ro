import { defineStore } from 'pinia'
import { useData } from './date'
import { useProduse } from './produse'

export const useFiltre = defineStore('filtre', {
  state: () => {
    const date = useData()
    return { date }
  },
  getters: {
    returneazaCategoriiActive(){
      return () => {
        return this.date.$state.categorii.filter( (categorie:any) => {
          return categorie.activ == true
        })
      }
    },

    returneazaCategoriiInactive(){
      return () => {
        return this.date.$state.categorii.filter( (categorie:any) => {
          return categorie.activ == false
        })
      }
    },

    returneazaStariActive(){
      return () => {
        return this.date.$state.stari.filter( (stare:any) => {
          return stare.activ == true
        })
      }
    },

    returneazaStariInactive(){
      return () => {
        return this.date.$state.stari.filter( (stare:any) => {
          return stare.activ == false
        })
      }
    },

    returneazaJudeteActive(){
      return () => {
        return this.date.$state.judete.filter( (judet:any) => {
          return judet.activ == true
        })
      }
    },

    returneazaJudeteInactive(){
      return () => {
        return this.date.$state.judete.filter( (judet:any) => {
          return judet.activ == false
        })
      }
    },
    returneazaProduseFiltrate(){
      return (pretMin:number, pretMax:number) => {
        const produseSortateDupaNume = this.date.$state.produse.filter( (produs:any) => {
          if(this.date.$state.ceAmCautat == ''){
            return true
          }
          else{
            let numeProdus:string = produs.nume
            numeProdus = numeProdus.toLowerCase()
            let ceAmCautatAcum:string = this.date.$state.ceAmCautat ? this.date.$state.ceAmCautat : ""
            ceAmCautatAcum = ceAmCautatAcum.toLowerCase()
            return numeProdus.startsWith(ceAmCautatAcum)
          }

        })
        const produseFiltrateDupaPret = produseSortateDupaNume.filter( (produs:any) => {
          if(produs.pret >= pretMin && produs.pret <= pretMax)
            return true
          return false
        })
        let produseFiltrareDupaCategorii = [] as any
        produseFiltrareDupaCategorii = produseFiltrateDupaPret
        if(this.date.$state.categorii.filter((categorie:any) => { return categorie.activ }).length > 0){
          const categoriiActive = this.date.$state.categorii.filter((categorie:any) => { return categorie.activ })
          produseFiltrareDupaCategorii = produseFiltrateDupaPret.filter( (produs:any) => {
            let exista:boolean = false
            categoriiActive.forEach( (categorie:any) => {
              if(produs.idCategorie == categorie.idCategorie)
                exista = true
            })
            return exista 
          }) 
        }
        let stariActive = this.date.$state.stari.filter( (stare:any) => {
          return stare.activ
        })
        let produseFiltrateDupaStari = produseFiltrareDupaCategorii
        if(stariActive.length > 0){
          produseFiltrateDupaStari = produseFiltrateDupaStari.filter( (produs:any) => {
            let exista = false
            stariActive.forEach( (stare:any) => {
              if(stare.idStare == produs.idStare )
                exista = true
              })
              return exista
          })

        }
        let produseFiltrateDupaJudete = produseFiltrateDupaStari
        let judeteActive = this.date.$state.judete.filter( (judet:any) => {
          return judet.activ
        })
        if(judeteActive.length > 0){
          produseFiltrateDupaJudete = produseFiltrateDupaJudete.filter( (produs:any) => {
            let exista:boolean = false
            judeteActive.forEach( (judet:any) => {
              if(judet.idJudet == produs.idJudet)
                exista = true
            })
            return exista
          })
        }
        return produseFiltrateDupaJudete
      }
    },
    returneazaPretMaxim(){
      return () => {
        return Math.max.apply(Math,this.date.$state.produse.map( function(produs:any){return produs.pret}))
      }
    }
  },

  actions: {
    schimbaStatutCategorieDupaId(id:number){
      this.date.categorii.forEach( (categorie:any) => {
        if(categorie.idCategorie == id)
          categorie.activ = !categorie.activ
      })
    },

    schimbaStatutStareDupaId(id:number){
      this.date.stari.forEach( (stare:any) => {
        if(stare.idStare == id)
          stare.activ = !stare.activ
      })
    },

    schimbaStatutJudetDupaId(id:number){
      this.date.judete.forEach( (judet:any) => {
        if(judet.idJudet == id)
          judet.activ = !judet.activ
      })
    }
  }

})