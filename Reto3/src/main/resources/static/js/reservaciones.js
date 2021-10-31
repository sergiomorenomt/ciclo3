var clientes = []
$(document).ready(function () {

    $.ajax({
        url: url + "/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            clientes = respuesta
            cargarClientes(clientes);
            consultar();
        }
    });
    $.ajax({
        url: url + "/api/Quadbike/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            cuatrimotos = respuesta
            cargarQuadbike(cuatrimotos);
            consultar();
        }
    });
    consultarReserva()
})

function cargarClientes(clientes) {
    var opciones;
    for (var i = 0; i < clientes.length; i++) {
        opciones += `
            <option value="${clientes[i].idClient}">${clientes[i].name}</option>`;
    }
    $("#id_Client").html(opciones);
}

function cargarQuadbike(cuatrimotos) {
    var opciones;
    for (var i = 0; i < cuatrimotos.length; i++) {
        opciones += `
            <option value="${cuatrimotos[i].id}">${cuatrimotos[i].name}</option>`;
    }
    $("#name").html(opciones);
}

function reservar() {
    console.log("Ejecutando funcion para reservar");

    let reserva = {

        startDate: $("#start_Date").val(),
        devolutionDate: $("#devolution_Date").val(),
        quadbike: { id: +$("#name").val() }, //id de la cuatrimoto 
        client: { idClient: +$("#id_Client").val() },

    };
    console.log(reserva);
    if (validarReserva(reserva)) {
        $.ajax({
            url: url + "/api/Reservation/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(reserva),
            statusCode: {
                201: function () {
                    alert('Se ha registrado la reserva');
                    consultar();
                }
            },
        });
    }

}


function consultarReserva() {
    $("#tabla_reserva").empty();
    $.ajax({
        url: url + "/api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log (respuesta)
            mostrarReserva(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarReserva(items) {
    var tabla = `<table class="table">
                  <tr>
                    <th>ID RESERVATION</th>
                    <th>START DATE</th>
                    <th>DEVOLUTION DATE</th>
                    <th>CLIENT</th>
                    <th>SCORE</th>
                    <th>Acciones</th>
                  </tr>`;

    // Id quadbike no se muestra en la visualización de reservas //

    for (var i = 0; i < items.length; i++) {
        txtScore = ""
        if (items[i].score !== null) {
            txtScore=items[i].score.score
        }
        tabla += `<tr>
                   <td>${items[i].idReservation}</td>
                   <td>${items[i].startDate}</td>
                   <td>${items[i].devolutionDate}</td>
                   <td>${items[i].client.name}</td>
                   <td>${txtScore}</td>
                   <td>
                        <button onclick="eliminarReserva(${items[i].idReservation})">Eliminar</button>
                        <a href="score.html?id=${items[i].idReservation}">Ir a calificar</a>
                        <a href="detalleReservas.html?id=${items[i].idReservation}">Editar</a>
                   </td> 
                </tr>`;
    }
    tabla += `</table>`;

    $("#tabla_reserva").html(tabla);
}


function actualizarReserva() {

    let reserva = {
        idReservation: +$("#id_Reservation").val(),
        startDate: $("#start_Date").val(),
        devolutionDate: $("#devolution_Date").val(),
        id: +$("#id").val(), //id de la cuatrimoto
        idClient: +$("#id_Client").val(),
        nameClient: $("#name_Client").val(),
        score: +$("#score").val(),

    };

    console.log(reserva);
    if (validarReserva(reserva)) {
        $.ajax({
            url: url + "/api/Reservation/update",
            type: 'PUT',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(reserva),
            statusCode: {
                201: function () {
                    alert('Se han actualizado los datos de la reserva');
                    window.location.assign('reservas.html')
                }
            },
        });

    }
}

function eliminarReserva(idReservation) {
    let opc = confirm('¿Está seguro que desea eliminar la reserva?')
    if (opc) {
        $.ajax({
            url: url + "/api/Reservation/"+idReservation,
            type: 'DELETE',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({ id: idReservation }),
            statusCode: {
                204: function () {
                    alert('Se ha eliminado la reserva');
                    consultarReserva()
                }
            },
        });
    }

}

function validarReserva(reserva) {
    if (reserva.idReservation <= 0 || reserva.startDate === '' || reserva.devolutionDate === '' || reserva.id <= 0 || reserva.idClient <= 0) {
        alert("Procure no dejar campos vacíos")
        return false;

    }
    return true;
}


function consultarReservaPorId(id) {
    $.ajax({
        url: url + "/api/Reservation/" + id,
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items)
            mostrarReservaUnica(respuesta.items[0]);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}


function mostrarReservaUnica(item) {
    console.log("item", item)
    $("#id_Reservation").val(item.idReservation);
    $("#start_Date").val(item.startDate);
    $("#devolution_Date").val(item.devolutionDate);
    $("#id").val(item.id);
}