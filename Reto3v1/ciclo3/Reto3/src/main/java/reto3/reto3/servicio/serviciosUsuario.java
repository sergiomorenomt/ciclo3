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
import reto3.reto3.modelo.Usuario;
import reto3.reto3.repositorio.RepositorioUsuario;

@Service
public class serviciosUsuario {
    

    @Autowired
    private RepositorioUsuario metodosCrud;
    
    public List<Usuario> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Usuario> getUsuario(int id){
        return metodosCrud.getUsuario(id);
    }
    public Usuario save(Usuario usuario){
        if (usuario.getIdUsuario()==null){
            return metodosCrud.save(usuario);
        }
        else{
            Optional<Usuario> evt=metodosCrud.getUsuario(usuario.getIdUsuario());
            if(evt.get()!=null){
                return metodosCrud.save(usuario);
            }else{
                return usuario;
            }
        }
            
    }

}