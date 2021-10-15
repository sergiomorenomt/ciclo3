/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.repositorio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import reto3.reto3.modelo.Usuario;
import reto3.reto3.repositorios.crud.interfaceUsuario;

@Repository
public class RepositorioUsuario {
 @Autowired
    private interfaceUsuario crud;
    public List<Usuario> getAll(){
        return (List<Usuario>) crud.findAll();
    }
   public Optional <Usuario> getUsuario(int idUsuario){
       return crud.findById(idUsuario);
   } 
   public Usuario save (Usuario usuario){
       return crud.save(usuario);
   }   
}
