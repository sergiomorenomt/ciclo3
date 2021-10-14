/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Reto3.Reto3;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
/**
 *
 * @author v13
 */
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
