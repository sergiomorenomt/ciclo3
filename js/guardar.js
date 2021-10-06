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
        url: "https://g5439e8565187ff-dbproyecto.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/quadbike/quadbike",
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