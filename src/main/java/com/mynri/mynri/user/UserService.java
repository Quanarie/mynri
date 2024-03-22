package com.mynri.mynri.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService
{
    private final UserRepository userRepository;

    // TODO: change with spring security
    public User getCurrent(){
        return userRepository.findAll().iterator().next();
    }

}

