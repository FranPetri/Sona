import { pedidos } from "./api.js"; //Importamos el json extraido de la API

let tabla = document.getElementById("tabla"); // Tomamos la tabla
let contador_pedidos = 0; // Generamos el contador
let myDom = new DOMParser();

// Agregar pedido a cada fila respecto a su hora
function addTimePedido(solicitud,hora,estado) {
    const exploded_hora = hora[1].split(":"); //split de la hora para separar la hora de los minutos
    const estado_pedido = colorPedido(estado);
    for (let i = 0; i <= exploded_hora[0]; i++) {
        generateFila(exploded_hora[0])
        if (hora[2] == "AM" && exploded_hora[0]==12) { // Si la hora es AM y la hora es igual a 12, insertamos la columna 12AM
            let pedidos_tabla = document.getElementById("tr0");
            pedidos_tabla.innerHTML += '<td id="pedido" class="'+solicitud+' '+estado_pedido+'">'+solicitud+'</td>'; 
            contador_pedidos++; // Contador de pedidos
            return true;
        }else if (exploded_hora[0] == i) { //Si encuentra la hora correspondiente
            let pedidos_tabla = document.getElementById("tr"+i);
            pedidos_tabla.innerHTML += '<td id="pedido" class="'+solicitud+' '+estado_pedido+'">'+solicitud+'</td>';
            contador_pedidos++; // Contador de pedidos
            return true;
        }
    }
}

function generateFila(hora) {
    for (let i = 0; i <= hora; i++) {
        let horario_tabla = document.getElementById("tr"+i);
        if (horario_tabla == null) { // Si no se encuentra la fila
            if (i == 0) { // Si es cero insertamos la fila 12AM
                tabla.innerHTML += '<tr id="tr'+i+'" class="fila"><td id="horario">12 AM</td></tr>';
            }else{
                if (i >= 12) { // Si es menor 12 insertamos las filas de horas PM
                    tabla.innerHTML += '<tr id="tr'+i+'" class="fila"><td id="horario">'+i+' PM</td></tr>';                   
                }else{ // Si no insertamos las filas de horas AM
                    tabla.innerHTML += '<tr id="tr'+i+'" class="fila"><td id="horario">'+i+' AM</td></tr>'; 
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