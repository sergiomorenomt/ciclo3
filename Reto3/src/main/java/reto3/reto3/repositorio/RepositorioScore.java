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
import reto3.reto3.modelo.Score;
import reto3.reto3.repositorios.crud.InterfaceScore;

@Repository
public class RepositorioScore {
@Autowired
    private InterfaceScore crud;
    public List<Score> getAll(){
        return (List<Score>) crud.findAll();
    }
   public Optional <Score> getScore (int idScore){
       return crud.findById(idScore);
   } 
   public Score save (Score score){
       return crud.save(score);
   }  
   
   public void delete(Score score) {
        crud.delete (score);
}
}
