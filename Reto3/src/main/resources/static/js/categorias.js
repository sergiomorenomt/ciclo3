$(document).ready(function () {
    consultarcategoria() //Consulta de categorias

});

function consultarcategoria() {
    $.ajax({
        url: url + "/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaCat(respuesta);
        }
    });
}

function eliminarCategorias(identificador){
    console.log("ejecutando funcion para eliminar");
    let opc = confirm('¿Está seguro que desea eliminar a esa categoria?')
    if (opc){
        let category = {
            id: +identificador
        };
    
        console.log(category);
    
        $.ajax({
            url: url+"/api/Category/"+identificador,
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(category),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado la categoria');
                    consultarcategoria();
                }
            },
        });
    }
    

}

function mostrarRespuestaCat(respuesta) {

    let myTable = `<table class="table">
                    <tr>
                    
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>ACCIONES</th>                 
                    </tr>`;

    for (i = 0; i < respuesta.length; i++) {
        myTable +=`<tr>
                   <td>${respuesta[i].name}</td>
                   <td>${respuesta[i].description}</td>
                   <td>
                   <button onclick="eliminarCategorias(${respuesta[i].id})">Eliminar</button>
                   <a href="detalleCategorias.html?id=${respuesta[i].id}">Editar</a>
                   </td>
                   </tr>`;
    }
    myTable += "</table>";
    $("#tabla_categorias").html(myTable);
}

function actualizar(){
    console.log("ejecutando funcion para actualizar");

    let category = {
        id: +$("#id").val(),
        description: $("#description").val(),
        name: +$("#name").val(),
        
    };

    console.log(category);
    if(validarCategoria(category)){
        $.ajax({
            url: url+"/api/Category/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(category),
            statusCode:{
                201:function(){
                    alert('Se ha actualizado la informacion de la categoria');
                    window.location.assign("categorias.html");
                }
            },
        });
    }
}


function guardarcategoria() {
    let var2 = {
        name: $("#Cname").val(),
        description: $("#Cdescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: url + "/api/Category/save",


        statusCode: {
            201: function () {
                alert('Se ha registrado la categoría');
                consultarcategoria()
                limpiarCamposCategoria()
            },
            555: function () {
                alert('Ya existe esa categoria')
            }
        }
    });
}

function validarCategoria(category){
    if (category.id<=0|| category.description===''|| categorias.name===''){
        alert("Procure no dejar campos vacíos\nEl  id de categoría son números positivos")
        return false;
    }
    return true;
}
function limpiarCamposCategoria(){
    $("#Cname").val()
    $("#Cdescription").val()
}