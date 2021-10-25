package reto3.reto3;

import reto3.reto3.modelo.Quadbike;
import reto3.reto3.repositorio.RepositorioQuadbike;
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
    private RepositorioQuadbike repoCuatrimoto;
    public static void main(String[] args) {
        SpringApplication.run(Reto3Application.class, args);
    }

    @Bean
    ApplicationRunner applicationRunner() {
        return args -> {
            List<Quadbike> ps = repoCuatrimoto.getAll();
            System.out.println("Productos: " + ps.size());

           
        };
    }

}
