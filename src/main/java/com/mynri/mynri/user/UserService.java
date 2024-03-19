package com.mynri.mynri.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService
{
    private final UserController userController;

    public User GetCurrent(){
        return userController.getCurrentUser();
    }

}

