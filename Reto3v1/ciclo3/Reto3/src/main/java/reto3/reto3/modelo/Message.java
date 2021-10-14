/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.modelo;
//import Reto3.Reto3.modelo.Category;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.io.Serializable;
//import java.util.List;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;

@Entity
@Table(name="message")
public class Message implements Serializable {
@Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)     
    private Integer idMessage;
    private String messageText;
 //@ManyToOne
 //@JoinColumn(name="id")
 //@JsonIgnoreProperties({"message","reservation"})
// private Cuatrimoto cuatrimoto;
 
 //@ManyToOne
 //@JoinColumn(name="Idclient")
 //@JsonIgnoreProperties({"message","reservation"})
 //private Client client;

    public Integer getIdMessage() {
        return idMessage;
    }

    public void setIdMessage(Integer idMessage) {
        this.idMessage = idMessage;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }
    /*
    public Cuatrimoto getCuatrimoto() {
        return cuatrimoto;
    }

    public void setCuatrimoto(Cuatrimoto cuatrimoto) {
        this.cuatrimoto = cuatrimoto;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    */
    
    
}
