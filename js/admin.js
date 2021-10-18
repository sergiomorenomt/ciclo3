function guardarAdmin(){
    let admin = {
        name: $("#name_admin").val(),
        email: $("#email_admin").val(),
        password: $("#password_admin").val()
    };
    
    if (validarAdmin(admin)){
        $.ajax({
            url: url+"/api/Admin/save",
            type: 'POST',
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify(admin),
            statusCode:{
                201:function(){
                    alert('Se ha registrado el admin');
                    consultaradmin()
                    limpiarCamposadmin()
                },
                555:function(){
                    alert('Ya existe un admin con ese id')
                }
            }
        });
    }
    
    

}