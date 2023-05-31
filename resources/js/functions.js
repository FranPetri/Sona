import { pedidos } from "./api.js"; //Importamos el json extraido de la API


function addTime(hora) {
    
}

// Agregar pedido a cada fila respecto a su hora
function addTimePedido(solicitud,hora) {
    let hora_maxima = 16; //Contador hasta hora maxima
    for (let i = 7; i <= hora_maxima; i++) {
        if (hora[0] == i) { //Si encuentra la hora correspondiente
            let horario = document.getElementById("td"+i); //Tomamos la fila correspondiente a la hora
            horario.innerHTML += "<td>"+solicitud+"</td>"; //Agregamos el pedido
        }
    }
}

// Promesa pedido x pedido
pedidos.then(pedido => {
    pedido.forEach(detalle => {
        // Informacion y desestructuracion del objeto (Pedido)
        const {Hora} = detalle; //Hora del pedido
        const {NroSolicitud} = detalle; //Numero de solicitud del pedido

        // Exlpoded de la hora para agregar a su respectiva fila
        const exploded_time = Hora.split(" ") //Split de la fecha para tomar la hora
        const exploded_hora = exploded_time[1].split(":"); //split de la hora para separar la hora de los minutos
        addTimePedido(NroSolicitud,exploded_hora)


    });
});