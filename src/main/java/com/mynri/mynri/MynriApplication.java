package com.mynri.mynri;

import com.mynri.mynri.entities.User;
import com.mynri.mynri.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class MynriApplication {

    public static void main(String[] args) {
        SpringApplication.run(MynriApplication.class, args);
    }
}
