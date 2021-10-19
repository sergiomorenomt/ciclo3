/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.retoquadbike.g33.repositorios.crud;

import com.retoquadbike.g33.modelo.Quadbike;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author USUARIO
 */
public interface InterfaceQuadbike extends CrudRepository<Quadbike,Integer> {
    
    @Query(value="select * from productos where categoria_id = ? order by nombre ASC", nativeQuery = true)
    public List<Quadbike> findByIdCategoriaOrderByNombreAsc(int idCategoria);
    
}
