function guardarcliente(){
    let client = {
        id: +$("#id_cliente").val(),
        name: $("#name_cliente").val(),
        email: $("#email_cliente").val(),
        age: +$("#age_cliente").val()
    };
    
    if (validarCliente(client)){
        $.ajax({
            url: url+"/ords/admin/client/client",
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
        url: url+ "/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarClientes(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarClientes(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Acciones</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].age}</td>
                   <td>
                        <button onclick="eliminarCliente(${items[i].id})">Eliminar</button>
                        <a href="detalleCliente.html?id=${items[i].id}">Ver detalle</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_cliente").html(tabla);
}


function consultarClientePorId(id){
    $.ajax({
        url: url+ "/ords/admin/client/client/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarClienteUnico(respuesta.items[0]);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarClienteUnico(item) {
    $("#id_cliente").val(item.id);
    $("#name_cliente").val(item.name);
    $("#email_cliente").val(item.email);
    $("#age_cliente").val(item.age);
}


function actualizarCliente(){

    let client = {
        id: +$("#id_cliente").val(),
        name: $("#name_cliente").val(),
        email: $("#email_cliente").val(),
        age: +$("#age_cliente").val()
    };

    console.log(client);
    if (validarCliente(client)){
        $.ajax({
            url: url+"/ords/admin/client/client",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(client),
            statusCode:{
                201:function(){
                    alert('Se han actualizado los datos del cliente');
                    window.location.assign('index.html')
                }
            },
        });

        }
}

function eliminarCliente(id){
    let opc = confirm('¿Está seguro que desea eliminar a ese cliente?')
    if(opc){
        $.ajax({
            url: url+"/ords/admin/client/client",
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({id:id}),
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
        alert("Procure no dejar campos vacíos\nEl id y la edad son números no negativos")
        return false;
    }else if (client.email.length>20){
        alert('Su correo es demasiado extenso. Debe tener 20 caracteres')
        return false;
    }else if (validarCorreo(client.email)){
        alert('Su correo no tiene formato de correo electrónico')
    }
    return true;
}

function limpiarCamposCliente(){
    $("#id_cliente").val('');
    $("#name_cliente").val('');
    $("#email_cliente").val('');
    $("#age_cliente").val('');
}

/**
 * Función que valida si un correo tiene el formato de correo electrónico o no. Tomado de: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
 * @param {string} email que es el correo
 * @returns verdadero si encaja con el formato y falso si no
 */
function validarCorreo(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}