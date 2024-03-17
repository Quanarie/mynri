package com.mynri.mynri.db;

import com.mynri.mynri.user.User;
import com.mynri.mynri.user.UserRepository;
import com.mynri.mynri.user.role.Role;
import com.mynri.mynri.user.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class DbInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Override
    public void run(String... args) {
        Set<Role> roles = Set.of(
                new Role("ROLE_USER"),
                new Role("ROLE_ADMIN")
        );
        roleRepository.saveAll(roles);

        Set<User> users = Set.of(
                new User(
                        "qustaine",
                        "$2a$12$Oa/r6G1ALZ4.WOz0mhCjnOsqsfqlk2WI9yUKlsRpxLO3.K9Wujhkm",
                        "qustaine@gmail.com",
                        roles
                )
        );
        userRepository.saveAll(users);
    }

}