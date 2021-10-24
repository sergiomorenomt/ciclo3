/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.repositorio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import reto3.reto3.modelo.Reservation;
import reto3.reto3.repositorios.crud.InterfaceReservation;

@Repository
public class RepositorioReservation {
 @Autowired
    private InterfaceReservation crud;
    public List<Reservation> getAll(){
        return (List<Reservation>) crud.findAll();
    }
   public Optional <Reservation> getReservation(int idReservation){
       return crud.findById(idReservation);
   } 
   public Reservation save (Reservation reservation){
       return crud.save(reservation);
   }    

    public void delete(Reservation reservation) {
        crud.delete (reservation);
    }
}
