/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.servicio;

import reto3.reto3.modelo.Category;
import reto3.reto3.repositorio.RepositorioCategory;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author v13
 */
@Service
public class ServiciosCategory {
    

 @Autowired
    private RepositorioCategory metodosCrud;
    
    public List<Category> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Category> getCategory(int idCategory){
        return metodosCrud.getCategory(idCategory);
    }
    public Category save(Category category){
        if (category.getId()==null){
            return metodosCrud.save(category);
        }
        else{
            Optional<Category> evt=metodosCrud.getCategory(category.getId());
            if(evt.get()!=null){
                return metodosCrud.save(category);
            }else{
                return category;
            }
        }
            
    }

    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category>g=metodosCrud.getCategory(category.getId());
            if(!g.isEmpty()){
                if(category.getDescription()!=null){
                    g.get().setDescription(category.getDescription());
                }
                if(category.getName()!=null){
                    g.get().setName(category.getName());
                }
                return metodosCrud.save(g.get());
            }
        }
        return category;
    }
    public boolean deletecategory(int idCategory){
        Boolean d=getCategory(idCategory).map(category -> {
            metodosCrud.delete(category);
            return true;
        }).orElse(false);
        return d;
    }


}
