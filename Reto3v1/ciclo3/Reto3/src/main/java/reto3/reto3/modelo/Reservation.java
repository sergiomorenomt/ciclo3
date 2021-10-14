/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.modelo;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.Date;
//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="reservation")
public class Reservation implements Serializable{
 @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)     
    private Integer idReservation;
    private Date starDate;
    private Date devolutionDate;
    private String status="created";
        
 //@ManyToOne
 //@JoinColumn(name="id")
 //@JsonIgnoreProperties("reservation")
 //private Cuatrimoto cuatrimoto;  
  

 //@ManyToOne
 //@JoinColumn(name="Idclient")
 //@JsonIgnoreProperties({"message","reservation"})
 //private Client client;  
 
// @OneToMany(cascade =(CascadeType.PERSIST),mappedBy="reservation")
 //@JsonIgnoreProperties("reservation")
 //private Score score;

    public Integer getIdReservation() {
        return idReservation;
    }

    public void setIdReservation(Integer idReservation) {
        this.idReservation = idReservation;
    }

    public Date getStarDate() {
        return starDate;
    }

    public void setStarDate(Date starDate) {
        this.starDate = starDate;
    }

    public Date getDevolutionDate() {
        return devolutionDate;
    }

    public void setDevolutionDate(Date devolutionDate) {
        this.devolutionDate = devolutionDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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

    public Score getScore() {
        return score;
    }

    public void setScore(Score score) {
        this.score = score;
    }
 
 */
 
 
}
