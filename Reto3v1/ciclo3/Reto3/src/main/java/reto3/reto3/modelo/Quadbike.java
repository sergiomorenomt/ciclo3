package reto3.reto3.modelo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author v13
 */
@Entity
@Table(name = "quadbike")
public class Quadbike implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    
//Se genera la variable id.
 
    private Integer id;
//Se genera la variable name.
    private String name;
 //Se genera la variable brand.  
    private String brand;
 //Se genera la variable year. 
    private Integer year;
 //Se genera la variable description.    
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties("quadbikes")
      
    private Category category;

    @OneToMany(cascade = (CascadeType.PERSIST), mappedBy = "quadbike")
    @JsonIgnoreProperties({"quadbike","client"})
    private List<Message> messages;

    @OneToMany(cascade = (CascadeType.PERSIST), mappedBy = "quadbike")
    @JsonIgnoreProperties("quadbike")
    private List <Reservation> reservations;
//Se genera el metodo getid.     
    public Integer getId() {
        return id;
    }
 //Se genera el metodo setid. 
    public void setId(Integer id) {
        this.id = id;
    }
 //Se genera el metodo getname.
    public String getName() {
        return name;
    }
 //Se genera el metodo setname.
    public void setName(String name) {
        this.name = name;
    }
 //Se genera el metodo getbrand.
    public String getBrand() {
        return brand;
    }
 //Se genera el metodo setbrand.
    public void setBrand(String brand) {
        this.brand = brand;
    }
 //Se genera el metodo getyear.
    public Integer getYear() {
        return year;
    }
 //Se genera el metodo setyear.
    public void setYear(Integer year) {
        this.year = year;
    }
 //Se genera el metodo getDescription.
    public String getDescription() {
        return description;
    }
 //Se genera el metodo setDescription.
    public void setDescription(String description) {
        this.description = description;
    }
//Se genera el metodo getCategory.
    public Category getCategory() {
        return category;
    }
//Se genera el metodo setCategory.
    public void setCategory(Category category) {
        this.category = category;
    }
//Se genera el metodo getMesssages.
    public List<Message> getMessages() {
        return messages;
    }
//Se genera el metodo setMesssages.
    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }
//Se genera el metodo getReservations.
    public List <Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List <Reservation> reservations) {
        this.reservations = reservations;
    }

}
