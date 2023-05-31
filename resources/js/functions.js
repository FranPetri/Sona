import { pedidos } from "./api.js"; //Importamos el json extraido de la API

let tabla = document.getElementById("tabla");
let contador_pedidos = 0;
 
// Agregar pedido a cada fila respecto a su hora
function addTimePedido(solicitud,hora) {
    const exploded_hora = hora[1].split(":"); //split de la hora para separar la hora de los minutos
    for (let i = 0; i <= exploded_hora[0]; i++) {
        let horario_tabla = document.getElementById("tr"+i);
        if (horario_tabla == null) {
            if (i == 0) {
                tabla.innerHTML += '<tr id="tr'+i+'"><td>12 AM</td></tr>';
            }else{
                if (i >= 12) {
                    tabla.innerHTML += '<tr id="tr'+i+'"><td>'+i+' PM</td></tr>';
                    
                }else{
                    tabla.innerHTML += '<tr id="tr'+i+'"><td>'+i+' AM</td></tr>';
                }
            }
        }
        if (hora[2] == "AM" && exploded_hora[0]==12) {
            let pedidos_tabla = document.getElementById("tr0");
            pedidos_tabla.innerHTML += '<td class="'+solicitud+'">'+solicitud+'</td>';//Tomamos la fila correspondiente a la hora 

        }else if (exploded_hora[0] == i) { //Si encuentra la hora correspondiente
            let pedidos_tabla = document.getElementById("tr"+i);
            pedidos_tabla.innerHTML += '<td class="'+solicitud+'">'+solicitud+'</td>';//Tomamos la fila correspondiente a la hora
        }
    }
    contador_pedidos++;
}
console.log(tabla)
function colorPedido(estado,solicitud) {
    if (estado == "Finalizado") {
        return '<td class="back_green">'+solicitud+'</td>'
    }
    if (estado == "Pendientes") {
        return '<td class="back_yellow">'+solicitud+'</td>'
    }
    if (estado == "Rechazado") {
        return '<td class="back_red">'+solicitud+'</td>'
    }
    if (estado == "A realizar") {
        return '<td class="back_white">'+solicitud+'</td>'
    }
}

// Promesa pedido x pedido
pedidos.then(pedido => {
    pedido.forEach(detalle => {
        // Informacion y desestructuracion del objeto (Pedido)
        const {FechaRealizacion} = detalle; //Hora del pedido
        const {NroSolicitud} = detalle; //Numero de solicitud del pedido
        const {Estado} = detalle; //Estado del pedido

        //Dar color correspondiente a su estado
        colorPedido(Estado,NroSolicitud)
        
        // Exlpoded de la hora para agregar a su respectiva fila
        const exploded_time = FechaRealizacion.split(" ") //Split de la fecha para tomar la hora
        addTimePedido(NroSolicitud,exploded_time)



        // Contador de Pedidos
        td_pedidos_total.innerText = "Pedidos en curso: Total " + contador_pedidos;
    });
});