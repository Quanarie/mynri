package com.mynri.mynri.configuration;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.stereotype.Service;

@Service
public class PasswordEncoder {

    public String encode(String password) {
        return DigestUtils.sha256Hex(password);
    }

    public boolean matches(String plainPassword, String encodedPassword) {
        return encode(plainPassword).equals(encodedPassword);
    }

}
