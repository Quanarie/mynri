package com.mynri.mynri.post.tag;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TagController {

    private final TagRepository tagRepository;

    @GetMapping("/tags")
    public List<Tag> getTags() {
        return (List<Tag>) tagRepository.findAll();
    }

}

