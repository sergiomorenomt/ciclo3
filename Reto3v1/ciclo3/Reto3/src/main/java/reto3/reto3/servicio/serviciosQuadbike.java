/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.servicio;

import reto3.reto3.modelo.Quadbike;
import reto3.reto3.repositorio.RepositorioQuadbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ServiciosQuadbike {
    

    @Autowired
    private RepositorioQuadbike metodosCrud;
    
    public List<Quadbike> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Quadbike> getQuadbike(int id){
        return metodosCrud.getQuadbike(id);
    }
    public Quadbike save(Quadbike quadbike){
        if (quadbike.getId()==null){
            return metodosCrud.save(quadbike);
        }
        else{
            Optional<Quadbike> evt=metodosCrud.getQuadbike(quadbike.getId());
            if(evt.get()!=null){
                return metodosCrud.save(quadbike);
            }else{
                return quadbike;
            }
        } 
            
    }
public Quadbike update(Quadbike quadbike){
        if(quadbike.getId()!=null){
            Optional<Quadbike> e=metodosCrud.getQuadbike(quadbike.getId());
            if(!e.isEmpty()){
                if(quadbike.getName()!=null){
                    e.get().setName(quadbike.getName());
                }
                if(quadbike.getBrand()!=null){
                    e.get().setBrand(quadbike.getBrand());
                }
                if(quadbike.getYear()!=null){
                    e.get().setYear(quadbike.getYear());
                }
                if(quadbike.getDescription()!=null){
                    e.get().setDescription(quadbike.getDescription());
                }
                if(quadbike.getCategory()!=null){
                    e.get().setCategory(quadbike.getCategory());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return quadbike;
            }
        }else{
            return quadbike;
        }
    }


    public boolean deleteQuadbike(int quadbikeId) {
        Boolean aBoolean = getQuadbike(quadbikeId).map(quadbike -> {
            metodosCrud.delete(quadbike);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}



   