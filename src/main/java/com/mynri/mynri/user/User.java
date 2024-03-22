package com.mynri.mynri.user;

import com.mynri.mynri.user.role.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;

import java.util.Set;

@Entity
@Getter
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NonNull
    @Column(unique = true)
    private final String username;

    @NonNull
    private final String password;

    @NonNull
    @Column(unique = true)
    private final String email;

    @ManyToMany(fetch = FetchType.EAGER)
    private final Set<Role> roles;

    public static UserDto toDto(User user) {
        return new UserDto(user.getUsername(), user.getRoles());
    }

}

