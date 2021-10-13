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
public class serviciosCuatrimoto {
    

    @Autowired
    private RepositorioCuatrimoto metodosCrud;
    
    public List<Cuatrimoto> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Cuatrimoto> getCuatrimoto(int idCuatrimoto){
        return metodosCrud.getCuatrimoto(idCuatrimoto);
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
