/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.web;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reto3.reto3.modelo.Usuario;
import reto3.reto3.servicio.serviciosUsuario;

@RestController
@RequestMapping("/api/Usuario")
public class UsuarioWeb {
@Autowired
    private serviciosUsuario servicios;
    @GetMapping ("/all")
    public List<Usuario> getUsuario(){
     return servicios.getAll();
    }
    @GetMapping("/(id)")
    public Optional<Usuario> getCuatrimoto(@PathVariable("id")int idUsuario){
        return servicios.getUsuario(idUsuario);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario save(@RequestBody Usuario usuario){
        return   servicios.save(usuario);
    }    
}
