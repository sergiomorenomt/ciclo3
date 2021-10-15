/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Reto3.Reto3;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author v13
 */
@Entity
@Table(name="category")
public class Category {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)     
    private Integer idcategory;
    private String name;
    private String description;
    
    @OneToMany(cascade =(CascadeType.PERSIST),mappedBy="Category")
    @JsonIgnoreProperties("Category")
    private List<Cuatrimoto> cuatrimoto;

    public Integer getIdcategory() {
        return idcategory;
    }

    public void setIdcategory(Integer idcategory) {
        this.idcategory = idcategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Cuatrimoto> getCuatrimoto() {
        return cuatrimoto;
    }

    public void setCuatrimoto(List<Cuatrimoto> cuatrimoto) {
        this.cuatrimoto = cuatrimoto;
    }

    
     
    
}
