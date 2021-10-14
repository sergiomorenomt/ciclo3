/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Reto3.Reto3;

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

/**
 *
 * @author v13
 */
@RestController
@RequestMapping("/api/Cuatrimoto")
public class CuatrimotoWeb {
    @GetMapping("/hola mundo")
    public String saludar(){
    return "hola mundo colombia";
            }
    @Autowired
    private serviciosCuatrimoto servicios;
    @GetMapping ("/all")
    public List<Cuatrimoto> getCuatrimoto(){
     return servicios.getAll();
    }
    @GetMapping("/(id)")
    public Optional<Cuatrimoto> getCuatrimoto(@PathVariable("id")int idCuatrimoto){
        return servicios.getCuatrimoto(idCuatrimoto);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Cuatrimoto save(@RequestBody Cuatrimoto cuatrimoto){
        return   servicios.save(cuatrimoto);
    }
}
