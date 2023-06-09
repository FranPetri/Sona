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
    for (let i = 1; i < pedido.length; i++) {
        if (pedido[i]["Estado"] == "Pendientes") {
            let fecha = pedido[i]["FechaRealizacion"].split(" ")
            let hora = fecha[1].split(":")

            let detalle_pedido = [[hora[0],fecha[2]],pedido[i]["Estado"],pedido[i]["Motivo"],pedido[i]["Observaciones"],pedido[i]["NroSolicitud"]]
            generateTable(detalle_pedido) 
        }
                   
    }
});

