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
import reto3.reto3.modelo.Client;
import reto3.reto3.repositorios.crud.InterfaceClient;

@Repository
public class RepositorioClient {
   @Autowired
    private InterfaceClient crud;
    public List<Client> getAll(){
        return (List<Client>) crud.findAll();
    }
   public Optional <Client> getClient(int idClient){
       return crud.findById(idClient);
   } 
   public Client save (Client client){
       return crud.save(client);
   }    

    public void delete(Client client) {
        crud.delete(client);
    }
}
