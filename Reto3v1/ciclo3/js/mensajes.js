function guardarMensaje(){
    let message ={
        id : +$("#id_mensaje").val(),
        messagetext: $("#name_mensaje").val(),
    }
    if(validarMensaje(message)){
        $.ajax({
            url: url+"/ords/admin/message/message",
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
        url: url+ "/ords/admin/message/message",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items)
            mostrarMensajes(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function validarMensaje(message){
    if(message.id<=0 || message.messagetext===''){
        alert("Procure no dejar campos vacíos\nEl id es un número positivo");
        return false;
    }
    return true;
}

function mostrarMensajes(items){
    $("#tabla_mensaje").empty()
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>Message</th>
                    <th>Acciones</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].messagetext}</td>
                   <td>
                        <button onclick="eliminarMensaje(${items[i].id})">Eliminar</button>
                        <a href="detalleMensaje.html?id=${items[i].id}">Ver detalle</a>
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
        url: url+ "/ords/admin/message/message/"+id,
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
    $("#name_mensaje").val(item.messagetext);
}

function actualizarMensaje(){
    let message ={
        id : +$("#id_mensaje").val(),
        messagetext: $("#name_mensaje").val(),
    }
    if(validarMensaje(message)){
        $.ajax({
            url: url+"/ords/admin/message/message",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(message),
            statusCode:{
                201:function(){
                    alert('Se ha actualizado el mensaje');
                    window.location.assign('index.html')
                },
                555:function(){
                    alert('Error al actualizar')
                }
            }
        });
    }
}

function eliminarMensaje(id){
    let opc = confirm('¿Está seguro que desea eliminar a ese mensaje?')
    if(opc){
        $.ajax({
            url: url+"/ords/admin/message/message",
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({id:id}),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado el mensaje');
                    consultarMensajes()
                }
            },
        });
    }

}