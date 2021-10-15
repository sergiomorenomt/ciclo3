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
import reto3.reto3.modelo.Reservation;
import reto3.reto3.servicio.serviciosReservation;

@RestController
@RequestMapping("/api/Reservation")
public class ReservationWeb {
@Autowired
    private serviciosReservation servicios;
    @GetMapping ("/all")
    public List<Reservation> getReservation(){
     return servicios.getAll();
    }
    @GetMapping("/(id)")
    public Optional<Reservation> getReservation(@PathVariable("id")int idReservation){
        return servicios.getReservation(idReservation);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation reservation){
        return   servicios.save(reservation);
    }       
}
