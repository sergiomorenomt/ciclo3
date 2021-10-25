var categorias = [] 
$(document).ready(function(){
    
    $.ajax({
        url: url + "/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            categorias = respuesta
            cargarCategorias(categorias);
            consultar();
        }
    });

})


function cargarCategorias(categorias){
    var opciones;
    for (var i=0; i < categorias.length; i++) {
        opciones +=`
            <option value="${categorias[i].id}">${categorias[i].name}</option>`;
    }
    $("#category_id").html(opciones);
}

function guardar(){
    console.log("Ejecutando funcion para guardar");

    let cuatrimoto = {
        brand: $("#brand").val(),
        year: +$("#year").val(),
        category: {id:+$("#category_id").val()},
        name: $("#name").val(),
        description: $("#description").val()
    };

    console.log(cuatrimoto);
    if (validarCuatrimoto(cuatrimoto)){
        $.ajax({
            url: url + "/api/Quadbike/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(cuatrimoto),
            statusCode:{
                201:function(){
                    alert('Se ha registrado la cuatrimoto');
                    consultar();
                }
            },
        });    
    }
    
}


function consultar(){
    $.ajax({
        url: url + "/api/Quadbike/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            mostrarRespuesta(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarRespuesta(items){
    $("#tabla").empty();
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>brand</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>NAME</th>
                    <th>ACCIONES</th>
                  </tr>`;
                  
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].description}</td>
                   <td>${items[i].category.name}</td>
                   <td>${items[i].name}</td>
                   <td>
                   <button onclick="eliminar(${items[i].id})">Eliminar</button>
                   <a href="detalle.html?id=${items[i].id}">Editar</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}

function actualizar(){
    console.log("ejecutando funcion para actualizar");

    let quadbike = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    };

    console.log(quadbike);
    if(validarCuatrimoto(quadbike)){
        $.ajax({
            url: url+"/api/Quadbike/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(quadbike),
            statusCode:{
                201:function(){
                    alert('Se ha actualizado la informacion de la cuatrimoto');
                    window.location.assign("index.html");
                }
            },
        });
    }
}

function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");
    let opc = confirm('¿Está seguro que desea eliminar a esa cuatrimoto?')
    if (opc){
        let quadbike = {
            id: +identificador
        };
    
        console.log(quadbike);
    
        $.ajax({
            url: url+"/api/Quadbike/",
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(quadbike),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado la cuatrimoto');
                    consultar();
                }
            },
        });
    }
    

}

function validarCuatrimoto(cuatrimoto){
    if (cuatrimoto.id<=0|| cuatrimoto.brand===''|| cuatrimoto.model===''|| cuatrimoto.name==='' || cuatrimoto.category_id<=0){
        alert("Procure no dejar campos vacíos\nEl id y id de categoría son números positivos")
        return false;
    }
    return true;
}