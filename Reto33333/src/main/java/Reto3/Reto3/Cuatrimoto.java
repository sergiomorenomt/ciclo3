/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Reto3.Reto3;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author v13
 */
@Entity
@Table(name="cuatrimoto")
public class Cuatrimoto {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;
  private String  name;
  private String  brand;
  private Integer year;
  private String description;
 @ManyToOne
<<<<<<< HEAD
 @JoinColumn(name="id")
 @JsonIgnoreProperties("Category")
 private Category category; 
=======
 @JoinColumn(name="idcategory")
 @JsonIgnoreProperties("category")
 private Category category;
>>>>>>> dbb76f759aca0f250007fd4d015b5dd063e74a10

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

     
  
}
