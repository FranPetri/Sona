import { pedidos } from "./api.js";

let id_horarios = ["td7","td8","td9","td10","td11","td12","td13","td14","td15","td16"]
const set_horarios = new Set()
const horarios = []
let contador = 7

id_horarios.forEach(element => {
    set_horarios.add(element)
});
set_horarios.forEach(element => {
    horarios[element] = 7
});

function addTime(solicitud,hora) {
}

pedidos.then(pedido => {
    pedido.forEach(detalle => {
        const {Hora} = detalle;
        const {NroSolicitud} = detalle;

        const exploded_time = Hora.split(" ")
        const exploded_hora = exploded_time[1].split(":");
 
        addTime(NroSolicitud,exploded_hora)
    });
});