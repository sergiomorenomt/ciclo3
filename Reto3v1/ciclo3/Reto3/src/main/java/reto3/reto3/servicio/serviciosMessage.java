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
import reto3.reto3.modelo.Message;
import reto3.reto3.repositorio.RepositorioMessage;

@Service
public class serviciosMessage {
    

 @Autowired
    private RepositorioMessage metodosCrud;
    
    public List<Message> getAll(){
        return metodosCrud.getAll();
        
    }
    public Optional<Message> getMessage(int idMessage){
        return metodosCrud.getMessage(idMessage);
    }
    public Message save(Message message){
        if (message.getIdMessage()==null){
            return metodosCrud.save(message);
        }
        else{
            Optional<Message> evt=metodosCrud.getMessage(message.getIdMessage());
            if(evt.get()!=null){
                return metodosCrud.save(message);
            }else{
                return message;
            }
        }
            
    }

}
