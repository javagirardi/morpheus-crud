package com.morpheus;

import com.morpheus.model.Usuario;
import com.morpheus.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {

		SpringApplication.run(CrudSpringApplication.class, args);

	}

	@Bean
	CommandLineRunner initDatabase(UsuarioRepository usuarioRepository) {
		return args -> {
				usuarioRepository.deleteAll();

				Usuario c = new Usuario();
				c.setName("Teste");
				c.setPhone("0123456789");
				usuarioRepository.save(c);
		};
	}

}
