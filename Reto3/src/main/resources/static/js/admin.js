$(document).ready(function() {
    consultarAdmin() //Consulta de admins
})
function guardarAdmin(){
    let admin = {
        name: $("#name_admin").val(),
        email: $("#email_admin").val(),
        password: $("#password_admin").val()
    };
    
    if (validarAdmin(admin)){
        $.ajax({
            url: url+"/api/Admin/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(admin),
            statusCode:{
                201:function(){
                    alert('Se ha registrado el admin');
                    consultarAdmin()
                    limpiarCamposAdmin()
                },
                555:function(){
                    alert('Ya existe un admin con ese id')
                }
            }
        });
    }
    
    

}

function consultarAdmin(){
    $("#tabla_admin").empty();
    $.ajax({
        url: url+ "/api/Admin/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarAdmins(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarAdmins(items){
    var tabla = `<table border="1">
                  <tr>
                    
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                    
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].name}</td>
                   <td>${items[i].email}</td>
                   <td>
                        <button onclick="eliminarAdmin(${items[i].idAdmin})">Eliminar</button>
                        <a href="detalleAdmin.html?id=${items[i].idAdmin}">Ver detalle</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_admin").html(tabla);
}

function actualizarAdmin(){
    let admin = {
        idAdmin: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };
    console.log(admin);
    if (validarAdmin(admin)){
        $.ajax({
            url: url+"/api/Admin/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(admin),
            statusCode:{
                201:function(){
                    alert('Se han actualizado los datos del administrador');
                    window.location.assign('admin.html');
                }
            }
        });

        }
}

function eliminarAdmin(id){
    let opc = confirm('¿Está seguro que desea eliminar a ese adminstrador?')
    if(opc){
        $.ajax({
            url: url+"/api/Admin/"+id,
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({idAdmin:id}),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado el administrador');
                    consultarAdmin()
                }
            },
        });
    }

}

function consultarAdminById(id){
    $.ajax({
        url: url+"/api/Admin/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            if (respuesta.idAdmin>0){
                llenarDatos(respuesta);
            }else{
                $("#boton").hide();
                alert('No se encuentra la cuatrimoto con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#id").val(item.idAdmin);
    $("#name").val(item.name);
    $("#email").val(item.email);
    }




function validarAdmin(admin){
    if (admin.id<=0|| admin.name===''|| admin.email===''|| admin.age<=0){
        alert("Procure no dejar campos vacíos\nEl id y la edad son números no negativos")
        return false;
    }else if (admin.email.length>45){
        alert('Su correo es demasiado extenso. Solamente puede tener hasta 45 caracteres')
        return false;
    }
    else if (admin.password.length>45){
        alert('Su contraseña es demasiado extensa. Solamente puede tener hasta 45 caracteres')
        return false;
    }
    return true;
}

function limpiarCamposAdmin(){
    $("#name_admin").val('');
    $("#email_admin").val('');
    $("#age_admin").val('');
    $("#password_admin").val('')
}