package com.mynri.mynri.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final UserService userService;

    @GetMapping("/user")
    public UserDto getCurrentUser() {
        return User.toDto(userService.getCurrent());
    }

    @GetMapping("/user/{username}")
    public UserDto getUserByUsername(@PathVariable String username) {
        return User.toDto(userRepository.findByUsername(username).orElseThrow());
    }

    @PostMapping("/register")
    void registerUser(@RequestBody User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        userRepository.save(user);
    }

}

