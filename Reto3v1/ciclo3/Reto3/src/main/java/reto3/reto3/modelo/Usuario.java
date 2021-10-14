/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.modelo;

//import Reto3.Reto3.modelo.Cuatrimoto;
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
//import java.util.List;
//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario implements Serializable{
@Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)     
    private Integer idUsuario;
    private String email;
    private String password;
//@OneToMany(cascade =(CascadeType.PERSIST),mappedBy="usuario")
  //  @JsonIgnoreProperties("usuario")
    //private List<Client> client;   

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
/*
    public List<Client> getClient() {
        return client;
    }

    public void setClient(List<Client> client) {
        this.client = client;
    }
  */
}
