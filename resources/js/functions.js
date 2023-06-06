import { pedidos } from "./api.js"; //Importamos el json extraido de la API

let tabla = document.getElementById("tabla"); // Tomamos la tabla
let tabla_pedidos = document.getElementById("pedidos")
let contador_pedidos = 0; // Generamos el contador

// Agregar pedido a cada fila respecto a su hora
function addTimePedido(solicitud,hora,estado) {
    const exploded_hora = hora[1].split(":"); //split de la hora para separar la hora de los minutos
    const estado_pedido = colorPedido(estado);
    for (let i = 0; i <= exploded_hora[0]; i++) {
        generateFila(exploded_hora[0])
        if (hora[2] == "AM" && exploded_hora[0]==12) { // Si la hora es AM y la hora es igual a 12, insertamos la columna 12AM
            let fila_pedido = document.getElementById("pedidos12AM");
            if (fila_pedido != null) {
                fila_pedido.innerHTML += '<span class="pedido '+estado_pedido+'">'+solicitud+'</span>';                 
            }
            contador_pedidos++; // Contador de pedidos
            return true;
        }else if (exploded_hora[0] == i) { //Si encuentra la hora correspondiente
            let fila_pedidosAM = document.getElementById("pedidos"+i+"AM");
            if (fila_pedidosAM != null) {
                fila_pedidosAM.innerHTML += '<span class="pedido '+estado_pedido+'">'+solicitud+'</span>';
            }
            let fila_pedidosPM = document.getElementById("pedidos"+i+"PM");
            if (fila_pedidosPM != null) {
                fila_pedidosPM.innerHTML += '<span class="pedido '+estado_pedido+'">'+solicitud+'</span>';
            }
            contador_pedidos++; // Contador de pedidos
            return true;
        }
    }
}


function generateFila(hora) {
    for (let i = 0; i <= hora; i++) {
        if (i == 0) {
            let hora12am = document.getElementById("12AM")
            if (hora12am == null) {
                tabla.innerHTML += '<span id="12AM" class="contain"><h4>12 AM</h4><div id="pedidos12AM" class="pedidos"></div></span>';
            }
        }else{
            if (i < 12) {
                let fila = document.getElementById(i+"AM")
                if (fila == null) {
                    tabla.innerHTML += '<span id="'+i+'AM" class="contain"><h4>'+i+' AM </h4><div id="pedidos'+i+'AM" class="pedidos"></div></span>';
                }
            }else{
                let fila = document.getElementById(i+"PM");
                if (fila == null) {
                    tabla.innerHTML += '<span id="'+i+'PM" class="contain"><h4>'+i+' PM </h4><div id="pedidos'+i+'PM" class="pedidos"></div></span>';
                }
            }
        }
    }
}
console.log(tabla)

function colorPedido(estado) {
    if (estado == "Finalizado") { // Si el estado es Finalizado
        return "back_green"; // Asignamos el color verde al fondo del pedido
    }
    if (estado == "Pendientes") {
        return "back_yellow"; // Asignamos el color amarillo al fondo del pedido
    }
    if (estado == "Rechazado") {
        return "back_red"; // Asignamos el color rojo al fondo del pedido
    }
    return false;
}

// Promesa pedido x pedido
pedidos.then(pedido => {
    pedido.forEach(detalle => {
        // Informacion y desestructuracion del objeto (Pedido)
        const {FechaRealizacion} = detalle; //Hora del pedido
        const {NroSolicitud} = detalle; //Numero de solicitud del pedido
        const {Estado} = detalle; // Estado del pedido
        
        // Exlpoded de la hora para agregar a su respectiva fila
        const exploded_time = FechaRealizacion.split(" ") //Split de la fecha para tomar la hora
        addTimePedido(NroSolicitud,exploded_time,Estado)

        // Contador de Pedidos
        td_pedidos_total.innerText = "Pedidos en curso: Total " + contador_pedidos;
    });
});