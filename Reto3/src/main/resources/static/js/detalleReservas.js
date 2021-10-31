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
            console.log(respuesta);
            llenarDatos(respuesta);
              },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#id_Reservation").val(item.idReservation);
    $("#start_Date").val(item.startDate);
    $("#start_Devolution").val(item.devolutionDate);
    $("#name_cliente").val(item.client.name);
    $("#score").val(item.score);
}