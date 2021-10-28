$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarMensajePorId(id);
    }
});

function consultarMensajePorId(id){
 $.ajax({
        url: url+"/api/Message/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            if (respuesta.idMessage>0){
                llenarDatos(respuesta);
            }else{
                $("#boton").hide();
                alert('No se encuentra el mensaje con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}
function llenarDatos(item){
    $("#id_mensaje").val(item.idMessage);
    $("#name_mensaje").val(item.messageText);
 
    }