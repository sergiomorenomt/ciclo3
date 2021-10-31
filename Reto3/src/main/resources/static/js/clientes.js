$(document).ready(function() {
    consultarcliente() //Consulta de clientes
})

function guardarcliente(){
    let client = {
        name: $("#name_cliente").val(),
        email: $("#email_cliente").val(),
        age: +$("#age_cliente").val(),
        password: $("#password_cliente").val()
    };
    
    if (validarCliente(client)){
        $.ajax({
            url: url+"/api/Client/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(client),
            statusCode:{
                201:function(){
                    alert('Se ha registrado el cliente');
                    consultarcliente()
                    limpiarCamposCliente()
                },
                555:function(){
                    alert('Ya existe un cliente con ese id')
                }
            }
        });
    }
    
    

}


function consultarcliente(){
    $("#tabla_cliente").empty();
    $.ajax({
        url: url+ "/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarClientes(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarClientes(items){
    var tabla = `<table border="1">
                  <tr>
                    
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                    
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age} años</td>
                   <td>
                        <a href="detalleCliente.html?id=${items[i].idClient}">Ver detalle</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_cliente").html(tabla);
}

/**
 * 
 * @param {type} id
 * @returns {undefined}
 */
function consultarClientePorId(id){
    $.ajax({
        url: url+ "/api/Client/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(client){
            console.log(client);
            mostrarClienteUnico(client);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}
/**
 * 
 * @param {client} item
 * @returns {undefined}
 */
function mostrarClienteUnico(item) {
    $("#id_cliente").val(item.idClient);
    $("#name_cliente").val(item.name);
    $("#email_cliente").val(item.email);
    $("#age_cliente").val(item.age);
}


function actualizarCliente(){

    let client = {
        idClient: $("#id_cliente").val(),
        name: $("#name_cliente").val(),
        email: $("#email_cliente").val(),
        age: +$("#age_cliente").val(),
        password: $("#password_cliente").val()
    };
    console.log(client);
    if (validarCliente(client)){
        $.ajax({
            url: url+"/api/Client/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(client),
            statusCode:{
                201:function(){
                    alert('Se han actualizado los datos del cliente');
                    window.location.assign('cliente.html');
                }
            }
        });

        }
}

function eliminarCliente(id){
    let opc = confirm('¿Está seguro que desea eliminar a ese cliente?')
    if(opc){
        $.ajax({
            url: url+"/api/Client/"+id,
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({idClient:id}),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado el cliente');
                    consultarcliente()
                }
            },
        });
    }

}

function validarCliente(client){
    if (client.id<=0|| client.name===''|| client.email===''|| client.age<=0){
        alert("Procure no dejar campos vacíos\nLa edad es un número no negativo")
        return false;
    }else if (client.email.length>45){
        alert('Su correo es demasiado extenso. Solamente puede tener hasta 45 caracteres')
        return false;
    }
    else if (client.password.length>45){
        alert('Su contraseña es demasiado extensa. Solamente puede tener hasta 45 caracteres')
        return false;
    }
    return true;
}

function limpiarCamposCliente(){
    $("#name_cliente").val('');
    $("#email_cliente").val('');
    $("#age_cliente").val('');
    $("#password_cliente").val('')
}
