package com.mynri.mynri.post.system;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GameSystemController {

    private final GameSystemRepository gameSystemRepository;

    @GetMapping("/gameSystems")
    public List<GameSystem> getPayments() {
        return (List<GameSystem>) gameSystemRepository.findAll();
    }
}

