async function getPedidos() {
    const response = await fetch("../resources/js/pedidos.json",
    { "mode": "no-cors",}
    );
    const jsonData = await response.json();
    return jsonData
}
//Guarda la matriz con los datos de la Api y los exporta
const pedidos = getPedidos();
export{
    pedidos,
}