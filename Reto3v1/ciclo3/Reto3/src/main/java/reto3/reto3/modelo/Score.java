/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.modelo;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="score")
public class Score implements Serializable{
 @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)     
    private Integer idScore;
    private Integer calificacion;
    private String mensaje;    
    
 //@ManyToOne
 //@JoinColumn(name="id")
 //@JsonIgnoreProperties("score")
 //private Cuatrimoto cuatrimoto;
 
 //@ManyToOne
 //@JoinColumn(name="idClient")
 //@JsonIgnoreProperties("score")
 //private Client client;

    public Integer getIdScore() {
        return idScore;
    }

    public void setIdScore(Integer idScore) {
        this.idScore = idScore;
    }

    public Integer getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Integer calificacion) {
        this.calificacion = calificacion;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
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
