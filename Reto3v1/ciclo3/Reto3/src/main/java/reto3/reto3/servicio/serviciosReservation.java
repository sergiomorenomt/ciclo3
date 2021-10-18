/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.servicio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reto3.reto3.modelo.Reservation;
import reto3.reto3.repositorio.RepositorioReservation;

@Service
public class ServiciosReservation {
 @Autowired
    private RepositorioReservation metodosCrud;
    
    public List<Reservation> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Reservation> getReservation(int idReservation){
        return metodosCrud.getReservation(idReservation);
    }
    public Reservation save(Reservation reservation){
        if (reservation.getIdReservation()==null){
            return metodosCrud.save(reservation);
        }
        else{
            Optional<Reservation> evt=metodosCrud.getReservation(reservation.getIdReservation());
            if(evt.get()!=null){
                return metodosCrud.save(reservation);
            }else{
                return reservation;
            }
        }
            
    }    
}
