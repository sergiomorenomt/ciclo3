/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.retoquadbike.g33.modelo;

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
@Table(name="admin")
public class Admin implements Serializable{
@Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)     
    private Integer idAdmin;
    private String name;
    private String email;
    private String password; 

    public Integer getIdAdmin() {
        return idAdmin;
    }

    public void setIdAdmin(Integer idUsuario) {
        this.idAdmin = idUsuario;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    
}
