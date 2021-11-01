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
import reto3.reto3.repositorio.RepositorioAdmin;

@Service
public class ServiciosAdmin {
    

    @Autowired
    private RepositorioAdmin metodosCrud;
    
    public List<Admin> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Admin> getAdmin(int id){
        return metodosCrud.getAdmin(id);
    }
    public Admin save(Admin usuario){
        if (usuario.getIdAdmin()==null){
            return metodosCrud.save(usuario);
        }
        else{
            Optional<Admin> evt=metodosCrud.getAdmin(usuario.getIdAdmin());
            if(evt.get()!=null){
                return metodosCrud.save(usuario);
            }else{
                return usuario;
            }
        }
            
    }
    public Admin update(Admin admin){
        if(admin.getIdAdmin()!=null){
            Optional<Admin>a=metodosCrud.getAdmin(admin.getIdAdmin());
            if(!a.isEmpty()){
                if(admin.getEmail()!=null){
                    a.get().setEmail(admin.getEmail());
                }
                if(admin.getName()!=null){
                    a.get().setName(admin.getName());
                }
                if(admin.getPassword()!=null){
                    a.get().setPassword(admin.getPassword());
                }
                return metodosCrud.save(a.get());
            }
        }
        return admin;
    }
    public boolean deleteAdmin(int idAdmin){
        Boolean d=getAdmin(idAdmin).map(admin -> {
            metodosCrud.delete(admin);
            return true;
        }).orElse(false);
        return d;
    }
}