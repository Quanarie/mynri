package com.mynri.mynri.user;

import com.mynri.mynri.configuration.PasswordEncoder;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final PasswordEncoder encoder = new PasswordEncoder();

    private final UserRepository userRepository;
    private final UserService userService;

    private User authenticatedUser = null;

    @GetMapping("/user")
    public UserDto getCurrentUser() {
        return authenticatedUser == null ? null : User.toDto(authenticatedUser);
    }

    @GetMapping("/user/{username}")
    public UserDto getUserByUsername(@PathVariable String username) {
        return User.toDto(userRepository.findByUsername(username).orElseThrow());
    }

    @PostMapping("/login")
    public boolean loginUser(@RequestBody User request) {
        User user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        boolean authenticated = encoder.matches(request.getPassword(), user.getPassword());
        if (authenticated)
            authenticatedUser = user;
        return authenticated;
    }

    @PostMapping("/logout")
    public boolean logoutUser() {
        authenticatedUser = null;
        return true;
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }

}

