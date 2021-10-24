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
import reto3.reto3.modelo.Message;
import reto3.reto3.repositorios.crud.InterfaceMessage;

@Repository
public class RepositorioMessage {
  @Autowired
    private InterfaceMessage crud;
    public List<Message> getAll(){
        return (List<Message>) crud.findAll();
    }
   public Optional <Message> getMessage(int idMessage){
       return crud.findById(idMessage);
   } 
   public Message save (Message message){
       return crud.save(message);
   }   

    public void delete(Message message) {
        crud.delete(message);
    }
}
