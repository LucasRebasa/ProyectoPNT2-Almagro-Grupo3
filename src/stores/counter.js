import { ref, computed } from "vue";
import { defineStore } from "pinia";
import medicoService  from "../services/medicoService";
import usuariosService  from "../services/usuariosService";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    id:"",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    matricula: "",
    dni: "",
    tipoUsuario:"",
    turnos: [],
  }),
  persist: true,
  actions: {
    async registerUsuario(nombre, apellido, dni, email, password) {
      const obj = {
        nombre,
        apellido,
        dni,
        email,
        password,
      };
      try{
        await usuariosService.create(obj);
      }catch(e){
        throw e;
      }
    },
    async registerMedico(nombre, apellido, dni, email, password, matricula) {
      const obj = {
        nombre,
        apellido,
        dni,
        email,
        password,
        matricula,
      };
      try{
        await medicoService.create(obj);
      }catch(e){
        throw e;
      }
    },
    async loginUsuario(email, password) {
      if (!email || !password) {
        return false;
      }
      try {
        let { data } = await usuariosService.login({email, password});
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.dni = data.dni;
        this.tipoUsuario = "USUARIO";
        return true;
      } catch (e) {
        return false;
      }
    },
    async loginMedico(email, password) {
      if (!email || !password) {
        return false;
      }
      try {
        let { data } = await medicoService.login({email, password});
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.email = data.email;
        this.dni = data.dni;
        this.tipoUsuario = "MEDICO";
        return true;
      } catch (e) {
        return false;
      }
    },
    nuevoTurno(fecha, hora, especialidad) {
      const nuevoTurno = {
        fechaTurno: fecha,
        horaTurno: hora,
        especialidadTurno: especialidad,
      };
      this.turnos.push(nuevoTurno);
    },
    eliminarTurno(turno) {
      this.turnos = this.turnos.filter((t) => {
        //T de tini, tini,tini
        return (
          t.fechaTurno !== turno.fechaTurno && t.horaTurno !== turno.horaTurno
        );
      });
    },
  },
});
