import { pedidos } from "./api.js";

const tabla = document.getElementById("tabla")

function generateTable(pedido) {
    let pedido_table = document.getElementById("pedido"+pedido[4]);
    if (pedido_table == null) {   
        tabla.innerHTML += '<span id="'+pedido[4]+'" class="pedido"><h2 id="'+pedido[0][0]+'">('+pedido[0][0]+' '+pedido[0][1]+')</h2> '+pedido[4]+': '+pedido[2]+' - '+pedido[3]+'</span><p>';
    }
}

console.log(tabla)
pedidos.then(pedido => {
    const horarios = [[],[]]
    for (let i = 1; i < pedido.length; i++) {
        let fecha = pedido[i]["FechaRealizacion"].split(" ")
        let hora = fecha[1].split(":")
        if (pedido[i]["Estado"] == "Pendientes") {           
            horarios[0].push(hora[0])            
            horarios[1].push(fecha[2])            
        }
    }
    horarios[0].sort()
    horarios[1].sort()
    for (let i = 0; i < horarios[0].length; i++) {
        parseInt(horarios[i])
    
        
    }
    console.log(horarios[0])
    console.log(horarios[1])
    console.log(pedido)
    for (let i = 1; i < pedido.length; i++) {
        let fecha = pedido[i]["FechaRealizacion"].split(" ")
        let hora = fecha[1].split(":")

        let fecha_anterior = pedido[i-1]["FechaRealizacion"].split(" ")
        let hora_anterior = fecha_anterior[1].split(":")

        let detalle_pedido = [[hora[0],fecha[2]],pedido[i]["Estado"],pedido[i]["Motivo"],pedido[i]["Observaciones"],pedido[i]["NroSolicitud"]]
        if (detalle_pedido[0][0] != hora_anterior[0] || detalle_pedido[0][0] == hora_anterior[0]) { //Cambiar != cuando encuentre solucion            
            if (pedido[i]["Estado"] == "Pendientes") {
                generateTable(detalle_pedido)            
            }
        }
    }
});

