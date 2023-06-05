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
                fila_pedido.innerHTML += '<li class="pedido '+estado_pedido+'">'+solicitud+'</li>';                 
            }
            contador_pedidos++; // Contador de pedidos
            return true;
        }else if (exploded_hora[0] == i) { //Si encuentra la hora correspondiente
            let fila_pedidosAM = document.getElementById("pedidos"+i+"AM");
            if (fila_pedidosAM != null) {
                fila_pedidosAM.innerHTML += '<li class="pedido '+estado_pedido+'">'+solicitud+'</li>';
            }
            let fila_pedidosPM = document.getElementById("pedidos"+i+"PM");
            if (fila_pedidosPM != null) {
                fila_pedidosPM.innerHTML += '<li class="pedido '+estado_pedido+'">'+solicitud+'</li>';
            }
            contador_pedidos++; // Contador de pedidos
            return true;
        }
    }
}

function generateFila(hora) {
    let horarios = document.getElementById("horarios")
    let table_pedidos = document.getElementById("pedidos")
    for (let i = 0; i <= hora; i++) { // Si no se encuentra la fila
        if (i == 0) { // Si es cero insertamos la fila 12AM
            let horario_12AM = document.getElementById("horario12AM")
            if (horario_12AM == null) {
                horarios.innerHTML += '<li id="horario12AM" class="hora relacionP_hora12AM">12 AM</li>';                
                table_pedidos.innerHTML += '<ul id="pedidos12AM" class="relacionP_hora12AM"></ul>';  
                let relacion_hp = document.getElementsByClassName("relacionP_hora12AM")
                // relacion_hp.item(0).classList.add("h100p")            
            }
        }else{
            if (i >= 12) { // Si es menor 12 insertamos las filas de horas PM
                let horario_PM = document.getElementById("horario"+i+"PM")
                if (horario_PM == null) {                    
                    horarios.innerHTML += '<li id="horario'+i+'PM" class="hora relacionP_horaPM">'+i+' PM</li>';                   
                    table_pedidos.innerHTML += '<ul id="pedidos'+i+'PM" class="relacionP_horaPM"></ul>';
                    let relacion_hp = document.getElementsByClassName("relacionP_hora"+i+"PM")
                    // relacion_hp.item(0).classList.add("h100p")             
                }
            }else{ // Si no insertamos las filas de horas AM
                let horario_AM = document.getElementById("horario"+i+"AM")
                if (horario_AM == null) {
                    horarios.innerHTML += '<li id="horario'+i+'AM" class="hora relacionP_horaAM">'+i+' AM</li>';                     
                    table_pedidos.innerHTML += '<ul id="pedidos'+i+'AM" class="relacionP_horaAM"></ul>';                     
                    let relacion_hp = document.getElementsByClassName("relacionP_hora"+i+"AM")
                    // relacion_hp.item(0).classList.add("h100p")
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