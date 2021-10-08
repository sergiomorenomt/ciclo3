var url = "https://g3f8b1b2854c10f-cuatrimoto.adb.sa-santiago-1.oraclecloudapps.com"

function consultar(){
    $.ajax({
        url: url + "/ords/admin/quadbike/quadbike",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarRespuesta(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>brand</th>
                    <th>MODEL</th>
                    <th>CATEGORY_ID</th>
                    <th>NAME</th>
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].model}</td>
                   <td>${items[i].category_id}</td>
                   <td>${items[i].name}</td>
                   <td>
                        <button>Eliminar</button>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}
function consultarcliente(){
    $.ajax({
        url: url+ "/ords/admin/client/client",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
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
                        <button>Eliminar</button>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_cliente").html(tabla);
}
