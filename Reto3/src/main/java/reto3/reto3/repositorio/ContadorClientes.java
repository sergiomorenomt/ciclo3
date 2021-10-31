/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package reto3.reto3.repositorio;

import reto3.reto3.modelo.Client;

/**
 *
 * @author tatia
 */
public class ContadorClientes {
    private Long total;
    private Client client;

    public ContadorClientes(Long total, Client client) {
        this.total = total;
        this.client = client;
    }
    
    

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    
    
}
