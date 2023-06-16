import axiosClient from "./axios";

const client = axiosClient;

export default {
    findAll(){
        return client.get("/turno");
    },
    findById(id){
        return client.get(`/turno/${id}`);
    },
    findByMedico(idMedico){
        return client.get(`/turno/medico/${idMedico}`);
    },
    findByPaciente(idPaciente){
        return client.get(`/turno/paciente/${idPaciente}`);
    },
    create(turno){
        return client.post("/turno", turno);
    },
    delete(id){
        return client.delete(`/turno/${id}`);
    },
    update(id,turno){
        return client.put(`/turno/${id}`, turno);
    },
    buscarDisponibilidad(idMedico,fecha){
        return client.get(`/turno/${idMedico}?=${fecha}`)
    }
};
