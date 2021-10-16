/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.web;

import reto3.reto3.servicio.serviciosCuatrimoto;
import reto3.reto3.modelo.Quadbike;
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

@RestController
@RequestMapping("/api/Quadbike")
public class CuatrimotoWeb {
    @Autowired
    private serviciosCuatrimoto servicios;
    @GetMapping ("/all")
    public List<Quadbike> getCuatrimoto(){
     return servicios.getAll();
    }
    @GetMapping("/(id)")
    public Optional<Quadbike> getCuatrimoto(@PathVariable("id")int id){
        return servicios.getCuatrimoto(id);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Quadbike cuatrimoto){
        servicios.save(cuatrimoto);
    }
}
