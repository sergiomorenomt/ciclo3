function traerReporteStatus() {
    console.log("test");
    $.ajax({
        url: url + "/api/Reservation/report-status",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaStatus(respuesta);
        }
    });
}
function mostrarRespuestaStatus(respuesta) {

    let myTable = `<table class="table">
        <thead class="thead-light">
            <tr>
                <th>COMPLETED:</th>
                <th>CANCELLED:</th>
                </tr>
        </thead>`;
    myTable += "<tr>";
    myTable += "<td>" + respuesta.completed + "</td>";
    myTable += "<td>" + respuesta.cancelled + "</td>";
    myTable += "</tr>";
    myTable += "</table>";
    $("#resultadoStatus").html(myTable);
}
function traerReporteDate() {

    var fechaInicio = document.getElementById("rStartDate").value;
    var fechaCierre = document.getElementById("rDevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);

    $.ajax({
        url: url + "/api/Reservation/report-dates/" + fechaInicio + "/" + fechaCierre,
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaDate(respuesta);
        }
    });
}
function mostrarRespuestaDate(respuesta) {

    let myTable = `<table class="table">
        <thead class="thead-light">
            <tr>
                <th>DEVOLUTION DATE:</th>
                <th>START DATE:</th>
                <th>STATUS:</th>
                </tr>
        </thead>`;


    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";


        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoDate").html(myTable);
}

function traerReporteClientes() {
    $.ajax({
        url: url + "/api/Reservation/report-clients",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaClientes(respuesta);
        }
    });
}
function mostrarRespuestaClientes(respuesta) {

    let myTable = `<table class="table">
        <thead class="thead-light">
            <tr>
                <th>TOTAL:</th>
                <th>NOMBRE:</th>
                <th>EMAIL:</th>
                <th>EDAD:</th>
            </tr>
        </thead>`;


    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].total + "</td>";
        myTable += "<td>" + respuesta[i].client.name + "</td>";
        myTable += "<td>" + respuesta[i].client.email + "</td>";
        myTable += "<td>" + respuesta[i].client.age + "</td>";

        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultadoClientes").html(myTable);
}