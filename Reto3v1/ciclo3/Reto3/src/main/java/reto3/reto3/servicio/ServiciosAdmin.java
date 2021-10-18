/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.servicio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reto3.reto3.modelo.Admin;
import reto3.reto3.repositorio.RepositorioUsuario;

@Service
public class ServiciosAdmin {
    

    @Autowired
    private RepositorioUsuario metodosCrud;
    
    public List<Admin> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Admin> getUsuario(int id){
        return metodosCrud.getUsuario(id);
    }
    public Admin save(Admin usuario){
        if (usuario.getIdAdmin()==null){
            return metodosCrud.save(usuario);
        }
        else{
            Optional<Admin> evt=metodosCrud.getUsuario(usuario.getIdAdmin());
            if(evt.get()!=null){
                return metodosCrud.save(usuario);
            }else{
                return usuario;
            }
        }
            
    }

}