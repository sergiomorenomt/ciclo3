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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import reto3.reto3.modelo.Admin;
import reto3.reto3.servicio.ServiciosAdmin;
@CrossOrigin(origins="http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/Admin")
public class AdminWeb {
@Autowired
    private ServiciosAdmin servicios;
    @GetMapping ("/all")
    public List<Admin> getAdmin(){
     return servicios.getAll();
    }
    @GetMapping("/(id)")
    public Optional<Admin> getAdmin(@PathVariable("id")int idAdmin){
        return servicios.getAdmin(idAdmin);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Admin usuario){
        servicios.save(usuario);
    }    
}
