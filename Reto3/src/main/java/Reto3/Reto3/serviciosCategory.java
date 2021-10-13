/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Reto3.Reto3;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author v13
 */
@Service
public class serviciosCategory {
    

 @Autowired
    private RepositorioCategory metodosCrud;
    
    public List<Category> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Category> getCategory(int idCategory){
        return metodosCrud.getCategory(idCategory);
    }
    public Category save(Category category){
        if (category.getIdcategory()==null){
            return metodosCrud.save(category);
        }
        else{
            Optional<Category> evt=metodosCrud.getCategory(category.getIdcategory());
            if(evt.get()!=null){
                return metodosCrud.save(category);
            }else{
                return category;
            }
        }
            
    }

}
