package com.mynri.mynri.post;

import com.mynri.mynri.user.User;
import com.mynri.mynri.user.UserRepository;
import com.mynri.mynri.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.StreamSupport;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;
    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("/posts")
    public List<PostDto> getPosts() {
        return StreamSupport.stream(postRepository.findAll().spliterator(), false)
                .map(Post::toDto)
                .toList();
    }

    @PostMapping("/posts")
    void addPost(@RequestBody Post post) {
        post.setCreator(userService.getCurrent());
        postRepository.save(post);
    }

    @PostMapping("/subscribeCurrentUser")
    void subscribeCurrentUser(@RequestBody Long postId) {
        User user = userRepository.findByUsername(userService.getCurrent().getUsername())
                .orElseThrow();
        Post post = postRepository.findById(postId)
                .orElseThrow();

        post.getSubscribers().add(user);
        postRepository.save(post);
    }

}

