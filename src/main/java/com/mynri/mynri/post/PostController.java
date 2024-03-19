package com.mynri.mynri.post;

import com.mynri.mynri.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;
    private final UserService userService;

    @GetMapping("/posts")
    public List<Post> getPosts() {
        return (List<Post>) postRepository.findAll();
    }

    @PostMapping("/posts")
    void addPost(@RequestBody Post post) {
        postRepository.save(new Post(post, userService.GetCurrent()));
    }

}

