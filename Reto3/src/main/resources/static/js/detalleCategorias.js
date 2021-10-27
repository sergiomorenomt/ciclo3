var categorias = [] 
$(document).ready(function(){
    console.log("Cargar categorias");
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

$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: url+"/api/Category/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            if (respuesta.id>0){
                llenarDatos(respuesta);
            }else{
                $("#boton").hide();
                alert('No se encuentra la categoria con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    $("#id").val(item.id);
    $("#description").val(item.description);
    $("#name").val(item.name);
   
}