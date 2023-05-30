import { pedidos } from "./api.js";

const array_pedidos = Array()
pedidos.then(pedido => array_pedidos.push(...pedido));
console.log(array_pedidos)
// const tabla = document.getElementById("tabla");

