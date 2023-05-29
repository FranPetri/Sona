async function getPedidos() {
    const response = await fetch("../resources/js/pedidos.json");
    const jsonData = await response.json();
    return jsonData
}

const pedidos = getPedidos();
export{
    pedidos,
}