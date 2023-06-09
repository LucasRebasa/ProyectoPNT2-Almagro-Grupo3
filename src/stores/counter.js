import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({nombre: "", apellido: "", mail:"",password:"", matricula:"",dni:"",turnos:[], usuarios:[],medicos:[]}),
  actions: {
    registerUsuario(nombre, apellido, dni, mail, password, ){
      this.nombre = nombre;
      this.apellido = apellido;
      this.mail = mail;
      this.password = password;
      this.dni = dni;
      const obj = {
        nombre,
        apellido,
        dni,
        mail,
        password
      }
      this.usuarios.push(obj);
    },
    registerMedico(nombre, apellido, dni, mail, password, matricula){
      this.nombre = nombre;
      this.apellido = apellido;
      this.mail = mail;
      this.password = password;
      this.matricula = matricula;
      const obj = {
        nombre,
        apellido,
        dni,
        mail,
        password,
        matricula
      }
      this.medicos.push(obj);
    },
    loginUsuario(mail,password){
      let usuario = this.usuarios.find(u => u.mail == mail && u.password == password)
      if(!usuario){
        return false;
      }
      this.mail = usuario.mail;
      this.password = usuario.password;
      return true;
    },
    loginMedico(mail,password,matricula){
      let medico = this.medicos.find(m => m.mail == mail && m.password == password && m.matricula == matricula)
      if(!medico){
        return false;
      }
      this.mail = usuario.mail;
      this.password = usuario.password;
      this.matricula = matricula;
      return true;
    },
    nuevoTurno(fecha,hora,especialidad){
        const nuevoTurno = {
        fechaTurno : fecha,
        horaTurno: hora,
        especialidadTurno: especialidad
        }
      this.turnos.push(nuevoTurno)
    },
    eliminarTurno(turno){
      this.turnos = this.turnos.filter(t =>{
        return t.fechaTurno !== turno.fechaTurno && t.horaTurno !== turno.horaTurno;
      })
    
  }
  }
})
