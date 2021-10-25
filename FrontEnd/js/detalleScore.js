$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarScorePorId(id);
    }
});

function consultarScorePorId(id){
    $.ajax({
        url: url+"/api/Score/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            if (respuesta.items.length==1){
                llenarDatos(respuesta.items[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra la puntuación con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}