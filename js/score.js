$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarReservaPorId(id);
    }
});

function consultarReservaPorId(id){
    $.ajax({
        url: url+"/api/Reservation/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items)
            mostrarReservaUnica(respuesta.items[0]);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}
function mostrarReservaUnica(item){
    console.log("item",item)
    $("#id_Reservation").val(item.idReservation);
    
}

function calificar(){
    console.log("Ejecutando calificacion de reserva");

    let score = {
        idReservation: +$("#id_Reservation").val(),
        score: +$("#score_R").val(),
        message: $("#message").val(),
         
        
    };
    console.log(score);
    if (validarScore(score)){
        $.ajax({
            url: url+"/api/Score/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(score),
            statusCode:{
                201:function(){
                    alert('Se ha registrado la calificacion');
                    consultar();
                }
            },
        });    
    }
    
}


function consultarScore(){
    $("#tabla_score").empty();
    $.ajax({
        url: url+"/api/Score/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarScore(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarScore(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID SCORE</th>
                    <th>ID RESERVATION</th>
                    <th>SCORE RESERVATION</th>
                    <th>MESSAGE</th>
                    <th>Acciones</th>
                  </tr>`;
                  
          
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].idScore}</td>
                   <td>${items[i].IdReservation}</td>
                   <td>${items[i].score}</td>
                   <td>${items[i].idClient}</td>
                   <td>${items[i].message}</td>
                   <td>
                        <button onclick="eliminarScore(${items[i].id})">Eliminar</button>
                        <a href="detalleScore.html?id=${items[i].id}">Ver detalle</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_score").html(tabla);
}

function actualizarScore(){

    let score = {
        idScore: +$("#id_Score").val(),
        idReservation: +$("#id_Reservation").val(),
        score: +$("#score_R").val(),
        message: $("#message").val(),

    };

    console.log(score);
    if (validarReserva(score)){
        $.ajax({
            url: url+"/api/Score/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(score),
            statusCode:{
                201:function(){
                    alert('Se han actualizado los datos de la calificación');
                    window.location.assign('index.html')
                }
            },
        });

        }
}

function eliminarScore(idScore){
    let opc = confirm('¿Está seguro que desea eliminar la calificación?')
    if(opc){
        $.ajax({
            url: url+"/api/Score/{id}",
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({id:id}),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado la reserva');
                    consultarscore()
                }
            },
        });
    }

}


function validarScore(score){
    if (score.idReservation<=0|| score.score<0 || score.score>5 || score.message===''){
        alert("Procure no dejar campos vacíos")
        return false;
    
    }
    return true;
}

