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



function mostrarRespuestaCat(respuesta) {

    let myTable = `<table border="1">
                    <tr>
                    
                    <th>Nombre</th>
                    <th>Descripción</th>
                                      
                    </tr>`;

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#tabla_categorias").html(myTable);
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

function limpiarCamposCategoria(){
    $("#Cname").val()
    $("#Cdescription").val()
}