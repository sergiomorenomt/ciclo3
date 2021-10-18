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
    public Optional<Quadbike> getCuatrimoto(int id){
        return metodosCrud.getCuatrimoto(id);
    }
    public Quadbike save(Quadbike cuatrimoto){
        if (cuatrimoto.getId()==null){
            return metodosCrud.save(cuatrimoto);
        }
        else{
            Optional<Quadbike> evt=metodosCrud.getCuatrimoto(cuatrimoto.getId());
            if(evt.get()!=null){
                return metodosCrud.save(cuatrimoto);
            }else{
                return cuatrimoto;
            }
        }
            
    }

}
