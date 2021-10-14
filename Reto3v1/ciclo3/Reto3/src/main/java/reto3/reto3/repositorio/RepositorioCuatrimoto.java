/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.repositorio;

import reto3.reto3.modelo.Cuatrimoto;
import reto3.reto3.repositorios.crud.interfaceCuatrimoto;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositorioCuatrimoto {
    @Autowired
    private interfaceCuatrimoto crud;
    public List<Cuatrimoto> getAll(){
        return (List<Cuatrimoto>) crud.findAll();
    }
   public Optional <Cuatrimoto> getCuatrimoto (int id){
       return crud.findById(id);
   } 
   public Cuatrimoto save (Cuatrimoto cuatrimoto){
       return crud.save(cuatrimoto);
   }
   
}
