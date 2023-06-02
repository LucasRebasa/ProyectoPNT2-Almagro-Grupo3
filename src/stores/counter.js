import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({nombre: "", apellido: "", mail:"",turnos:[],}),
  actions: {
    login(nombre,mail){
      this.nombre = nombre;
      this.mail=mail;
    },
    nuevoTurno(fecha,hora,especialidad){
        const nuevoTurno = {
        fechaTurno : fecha,
        horaTurno: hora,
        especialidadTurno: especialidad
        }
      this.turnos.push(nuevoTurno)
    }
  }


})
