package com.mynri.mynri.post.warning;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class WarningController {

    private final WarningRepository warningRepository;

    @GetMapping("/warnings")
    public List<Warning> getWarnings() {
        return (List<Warning>) warningRepository.findAll();
    }

}

