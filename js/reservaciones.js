function reservar(){
    console.log("Ejecutando funcion para reservar");

    let reserva = {
        idReservation: +$("#id_Reservation").val(),
        startDate: +$("#start_Date").val(),
        devolutionDate: +$("#devolution_Date").val(),
        id: +$("#id").val(), //id de la cuatrimoto
        idClient: +$("#id_Client").val(),
        nameClient: $("#name_Client").val(),
        
    };
    console.log(reserva);
    if (validarReserva(reserva)){
        $.ajax({
            url: url+"/api/Reservation/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(cuatrimoto),
            statusCode:{
                201:function(){
                    alert('Se ha registrado la reserva');
                    consultar();
                }
            },
        });    
    }
    
}


function consultarReserva(){
    $("#tabla_reserva").empty();
    $.ajax({
        url: url+"/api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            mostrarReserva(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarReserva(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID RESERVATION</th>
                    <th>START DATE</th>
                    <th>DEVOLUTION DATE</th>
                    <th>ID CLIENT</th>
                    <th>NAME CLIENT</th>
                    <th>SCORE</th>
                    <th>Acciones</th>
                  </tr>`;
                  
                  // Id quadbike no se muestra en la visualización de reservas //
    
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].idReservation}</td>
                   <td>${items[i].startDate}</td>
                   <td>${items[i].devolutionDate}</td>
                   <td>${items[i].idClient}</td>
                   <td>${items[i].nameClient}</td>
                   <td>${items[i].score}</td>
                   <td>
                        <button onclick="eliminarReserva(${items[i].id})">Eliminar</button>
                        <a href="detalleReservas.html?id=${items[i].id}">Ver detalle</a>
                   </td> 
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla_reserva").html(tabla);
}


function actualizarReserva(){

    let reserva = {
        idReservation: +$("#id_Reservation").val(),
        startDate: +$("#start_Date").val(),
        devolutionDate: +$("#devolution_Date").val(),
        id: +$("#id").val(), //id de la cuatrimoto
        idClient: +$("#id_Client").val(),
        nameClient: $("#name_Client").val(),
        score: +$("#score").val(),

    };

    console.log(reserva);
    if (validarReserva(reserva)){
        $.ajax({
            url: url+"/api/Reservation/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(reserva),
            statusCode:{
                201:function(){
                    alert('Se han actualizado los datos de la reserva');
                    window.location.assign('index.html')
                }
            },
        });

        }
}

function eliminarReserva(idReservation){
    let opc = confirm('¿Está seguro que desea eliminar la reserva?')
    if(opc){
        $.ajax({
            url: url+"/api/Reservation/{id}",
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({id:id}),
            statusCode:{
                204:function(){
                    alert('Se ha eliminado la reserva');
                    consultarreserva()
                }
            },
        });
    }

}

function validarReserva(reserva){
    if (reserva.idReservation<=0|| reserva.startDate===''|| reserva.devolutionDate===''|| reserva.id<=0 || reserva.idClient<=0){
        alert("Procure no dejar campos vacíos\nEl id y la edad son números no negativos")
        return false;
    
    }
    return true;
}


function consultarReservaPorId(id){
        $.ajax({
            url: url+"/api/Reservation/all"+id,
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
        $("#start_Date").val(item.startDate);
        $("#devolution_Date").val(item.devolutionDate);
        $("#id").val(item.id);
    }