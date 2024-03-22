package com.mynri.mynri.user;

import com.mynri.mynri.user.role.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;

import java.util.Set;

@Getter
@AllArgsConstructor
public class UserDto {

    private String username;
    private Set<Role> roles;
}

