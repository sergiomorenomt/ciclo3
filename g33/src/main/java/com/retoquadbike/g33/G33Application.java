package com.retoquadbike.g33;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties
@EntityScan(basePackages = {"com.retoquadbike.g33.modelo"})
@SpringBootApplication
public class G33Application {

	public static void main(String[] args) {
		SpringApplication.run(G33Application.class, args);
	}
}