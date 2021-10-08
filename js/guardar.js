function guardar(){
    console.log("Ejecutando funcion para guardar");

    let cuatrimoto = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
    };

    console.log(cuatrimoto);

    $.ajax({
        url: url+"/ords/admin/quadbike/quadbike",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cuatrimoto),
        statusCode:{
            201:function(){
                alert('Se ha registrado la cuatrimoto');
            }
        },
    });

}
function guardarcliente(){
    console.log("ejecutando funcion para guardar");

    let client = {
        id: +$("#id_cliente").val(),
        name: $("#name_cliente").val(),
        email: $("#email_cliente").val(),
        age: +$("#age_cliente").val()
    };

    console.log(client);

    $.ajax({
        url: url+"/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha registrado el cliente');
            }
        },
    });

}

