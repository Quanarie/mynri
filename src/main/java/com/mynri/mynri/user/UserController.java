package com.mynri.mynri.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    // TODO: change with spring security
    @GetMapping("/currentUser")
    public User getCurrentUser() {
        return userRepository.findAll().iterator().next();
    }

    @PostMapping("/register")
    void registerUser(@RequestBody User user) {
        userRepository.save(user);
    }
}

