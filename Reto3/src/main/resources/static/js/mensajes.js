var clientes = []
$(document).ready(function () {

    $.ajax({
        url: url + "/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            clientes = respuesta
            cargarClientes(clientes);
            
        }
    });
    $.ajax({
        url: url + "/api/Quadbike/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            cuatrimotos = respuesta
            cargarQuadbike(cuatrimotos);
        }
    });
    consultarMensajes()
})

function cargarClientes(clientes) {
    var opciones;
    for (var i = 0; i < clientes.length; i++) {
        opciones += `
            <option value="${clientes[i].idClient}">${clientes[i].name}</option>`;
    }
    $("#id_Client").html(opciones);
}

function cargarQuadbike(cuatrimotos) {
    var opciones;
    for (var i = 0; i < cuatrimotos.length; i++) {
        opciones += `
            <option value="${cuatrimotos[i].id}">${cuatrimotos[i].name}</option>`;
    }
    $("#name").html(opciones);
}

function guardarMensaje(){
    let message ={
        
        messageText: $("#name_mensaje").val(),
        quadbike: { id: +$("#name").val() }, //id de la cuatrimoto 
        client: { idClient: +$("#id_Client").val() },
    }
    if(validarMensaje(message)){
        $.ajax({
            url: url + "/api/Message/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(message),
            statusCode:{
                201:function(){
                    alert('Se ha registrado el mensaje');
                    consultarMensajes()
                    limpiarCamposMensaje()
                },
                555:function(){
                    alert('Ya existe un cliente con ese id')
                }
            }
        });
    }
}
function consultarMensajes(){
    $.ajax({
        url: url + "/api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta)
            mostrarMensajes(respuesta);
        }
        
    });
}

function validarMensaje(message){
    if(message.idMessage<=0 || message.messageText===''){
        alert("Procure no dejar campos vacíos\nEl id es un número positivo");
        return false;
    }
    return true;
}

function mostrarMensajes(items){
    $("#tabla_mensaje").empty()
    var tabla = `<table class="table">
                  <tr>
                    
                    <th>CLIENT</th>
                    <th>QUADBIKE</th>
                    <th>Message</th>
                    <th>Acciones</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   
                   <td>${items[i].client.name}</td>
                   <td>${items[i].quadbike.name}</td>
                   <td>${items[i].messageText}</td>



                   <td>
                        <button onclick="eliminarMensaje(${items[i].idMessage})">Eliminar</button>
                        <a href="detalleMensaje.html?id=${items[i].idMessage}">Ver detalle</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_mensaje").html(tabla);
}

function limpiarCamposMensaje(){
    $("#id_mensaje").val('');
    $('#message').val('');
}


function consultarMensajePorId(id){
    $.ajax({
        url: url+ "/api/Message/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items)
            mostrarMensajeUnico(respuesta.items[0]);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function mostrarMensajeUnico(item){
    console.log("item",item)
    $("#id_mensaje").val(item.id);
    $("#name_mensaje").val(item.messageText);
}

function actualizarMensaje(){
    console.log("ejecutando funcion para actualizar");
    let message ={
        idMessage : +$("#id_mensaje").val(),
        messageText: $("#name_mensaje").val(),
    };
    console.log(message);
    if(validarMensaje(message)){
        $.ajax({
            url: url+"/api/Message/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(message),
            statusCode:{
                201:function(){
                    alert('Se ha actualizado el mensaje');
                    window.location.assign('mensaje.html');
                },
                555:function(){
                    alert('Error al actualizar')
                }
            }
        });
    }
}

function eliminarMensaje(identificador){
    console.log("ejecutando funcion para eliminar");
    let opc = confirm('¿Está seguro que desea eliminar este mensaje?')
    if (opc){
        let message = {
            id: +identificador
        };
    
        console.log(message);
    
        $.ajax({
            url: url+"/api/Message/"+identificador,
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(message),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado el mensaje');
                    consultarMensajes();
                }
            },
        });
    }
    

}
