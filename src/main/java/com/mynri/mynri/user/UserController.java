package com.mynri.mynri.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    @GetMapping("/currentUser")
    public UserDto getCurrentUser() {
        return User.toDto(userService.getCurrent());
    }

    @PostMapping("/register")
    void registerUser(@RequestBody User user) {
        String hashedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        userRepository.save(new User(user.getUsername(), hashedPassword, user.getEmail(), user.getRoles()));
    }
}

