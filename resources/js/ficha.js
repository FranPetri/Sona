function changeTitle(cliente,proyecto) {
    let clientehtml = document.getElementById("cliente");
    clientehtml.innerText += cliente;
    let proyectohtml = document.getElementById("proyecto");
    proyectohtml.innerText += proyecto;
}
changeTitle("Cliente","Proyecto");

function changePDV(name,dir,cadena,local,prov) {
    let namehtml = document.getElementById("nombre");
    namehtml.innerText += name;
    let dirhtml = document.getElementById("dir");
    dirhtml.innerText += dir;
    let cadenahtml = document.getElementById("cadena");
    cadenahtml.innerText += cadena;
    let localhtml = document.getElementById("local");
    localhtml.innerText += local;
    let provhtml = document.getElementById("prov");
    provhtml.innerText += prov;
}
changePDV("Nombre","Direccion","Cadena","Localidad","Provincia");

function changePedido(fecha,hora,tipo,estado,dist,remito,solicitud,obs) {
    let fechahtml = document.getElementById("fechar");
    fechahtml.innerText += fecha;
    let horahtml = document.getElementById("horae");
    horahtml.innerText += hora;
    let tipohtml = document.getElementById("tipo");
    tipohtml.innerText += tipo;
    let estadohtml = document.getElementById("estado");
    estadohtml.innerText += estado;
    let disthtml = document.getElementById("dist");
    disthtml.innerText += dist;
    let remitohtml = document.getElementById("remito");
    remitohtml.innerText += remito;
    let solicitudhtml = document.getElementById("soli");
    solicitudhtml.innerText += solicitud;
    let obshtml = document.getElementById("obs");
    obshtml.innerText += obs; 
}
changePedido("Fecha","Hora","Tipo","Estado","Dist","Remito","Solicitud","Observacion");

function setMateriales(pops) {
    let pophtml = document.getElementById("pop");
    pophtml.innerText += pops[0];
    let canthtml = document.getElementById("cant");
    canthtml.innerText += pops[1];
    let descpophtml = document.getElementById("descpop");
    descpophtml.innerText += pops[2];
    let accionhtml = document.getElementById("accion");
    accionhtml.innerText += pops[3];
    let detailhtml = document.getElementById("detail");
    detailhtml.innerText += pops[4];
}

// setMateriales()

function setVisitas(fecha,estado,valid,detail,galeria,subirarch) {
    let fechahtml = document.getElementById("fechaped");
    fechahtml.innerText += fecha;
    let estadohtml = document.getElementById("estadoped");
    estadohtml.innerText += estado;
    let validhtml = document.getElementById("valid");
    validhtml.innerText += valid;
    let detailhtml = document.getElementById("detail");
    detailhtml.innerText += detail;
    let galeriahtml = document.getElementById("galeria");
    galeriahtml.innerText += galeria;
    let subirarchhtml = document.getElementById("subirarch");
    subirarchhtml.innerText += subirarch;
}
setVisitas("Fecha","Estado","Validado","Detalle","Galeria","Subir Archivo")