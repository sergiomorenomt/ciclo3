/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Reto3.Reto3.servicio;

import Reto3.Reto3.modelo.Cuatrimoto;
import Reto3.Reto3.repositorio.RepositorioCuatrimoto;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class serviciosCuatrimoto {
    

    @Autowired
    private RepositorioCuatrimoto metodosCrud;
    
    public List<Cuatrimoto> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Cuatrimoto> getCuatrimoto(int id){
        return metodosCrud.getCuatrimoto(id);
    }
    public Cuatrimoto save(Cuatrimoto cuatrimoto){
        if (cuatrimoto.getId()==null){
            return metodosCrud.save(cuatrimoto);
        }
        else{
            Optional<Cuatrimoto> evt=metodosCrud.getCuatrimoto(cuatrimoto.getId());
            if(evt.get()!=null){
                return metodosCrud.save(cuatrimoto);
            }else{
                return cuatrimoto;
            }
        }
            
    }

}
