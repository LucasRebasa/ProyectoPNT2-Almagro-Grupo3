import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({nombre: "", apellido: "", mail:""}),
  actions: {
    login(nombre,mail){
      this.nombre = nombre;
      this.mail=mail;
    }
  }


})
