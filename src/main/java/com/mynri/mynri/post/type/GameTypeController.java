package com.mynri.mynri.post.type;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class GameTypeController {

    private final GameTypeRepository gameTypeRepository;

    @GetMapping("/gameTypes")
    public List<GameType> getGameTypes() {
        return (List<GameType>) gameTypeRepository.findAll();
    }

}

