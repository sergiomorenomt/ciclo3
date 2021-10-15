//1.Modelo o Entidad
//2.Interface
//3.Repositorio
//4.Servicios
//5.Controlador o  Web
package reto3.reto3;

import reto3.reto3.modelo.Cuatrimoto;
import reto3.reto3.repositorio.RepositorioCuatrimoto;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"reto3.reto3"})
public class Reto3Application {
    @Autowired
    private RepositorioCuatrimoto repoCuatrimoto;
    public static void main(String[] args) {
        SpringApplication.run(Reto3Application.class, args);
    }

    @Bean
    ApplicationRunner applicationRunner() {
        return args -> {
            List<Cuatrimoto> ps = repoCuatrimoto.getAll();
            System.out.println("Productos: " + ps.size());

           
        };
    }

}
