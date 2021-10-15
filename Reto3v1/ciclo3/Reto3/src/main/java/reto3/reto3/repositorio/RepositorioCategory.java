    /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.repositorio;

import reto3.reto3.modelo.Category;
import reto3.reto3.repositorios.crud.interfaceCategory;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class RepositorioCategory {
    @Autowired
    private interfaceCategory crud;
    public List<Category> getAll(){
        return (List<Category>) crud.findAll();
    }
   public Optional <Category> getCategory(int id){
       return crud.findById(id);
   } 
   public Category save (Category category){
       return crud.save(category);
   }
}
