package com.mynri.mynri.configuration;

import com.mynri.mynri.post.Post;
import com.mynri.mynri.post.PostRepository;
import com.mynri.mynri.post.payment.Payment;
import com.mynri.mynri.post.payment.PaymentRepository;
import com.mynri.mynri.post.system.GameSystem;
import com.mynri.mynri.post.system.GameSystemRepository;
import com.mynri.mynri.post.tag.Tag;
import com.mynri.mynri.post.tag.TagRepository;
import com.mynri.mynri.post.type.GameType;
import com.mynri.mynri.post.type.GameTypeRepository;
import com.mynri.mynri.post.warning.Warning;
import com.mynri.mynri.post.warning.WarningRepository;
import com.mynri.mynri.user.User;
import com.mynri.mynri.user.UserRepository;
import com.mynri.mynri.user.role.Role;
import com.mynri.mynri.user.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class DbInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final PaymentRepository paymentRepository;
    private final GameSystemRepository gameSystemRepository;
    private final GameTypeRepository gameTypeRepository;
    private final PostRepository postRepository;
    private final TagRepository tagRepository;
    private final WarningRepository warningRepository;

    @Override
    public void run(String... args) {
        Set<Role> roles = Set.of(
                new Role("ROLE_USER"),
                new Role("ROLE_ADMIN")
        );
        roleRepository.saveAll(roles);

        Set<User> users = Set.of(
                new User(
                        "qustaine",
                        new BCryptPasswordEncoder().encode("changeit"),
                        "qustaine@gmail.com",
                        roles
                )
        );
        userRepository.saveAll(users);

        Set<Payment> payments = Set.of(
                new Payment("Free"),
                new Payment("Donate"),
                new Payment("Club"),
                new Payment("Master"),
                new Payment("ClubAndMaster")
        );
        paymentRepository.saveAll(payments);

        Set<GameSystem> gameSystems = Set.of(
                new GameSystem("Dungeons & Dragons 5e"),
                new GameSystem("Cyberpunk Red")
        );
        gameSystemRepository.saveAll(gameSystems);

        Set<GameType> gameTypes = Set.of(
                new GameType("Oneshot"),
                new GameType("Campaign")
        );
        gameTypeRepository.saveAll(gameTypes);

        Set<Tag> tags = Set.of(
                new Tag("Плейтест"),
                new Tag("Англійська"),
                new Tag("Свої персонажі"),
                new Tag("Новачками сюди")
        );
        tagRepository.saveAll(tags);

        Set<Warning> warnings = Set.of(
                new Warning("Кров"),
                new Warning("Нецензурна лексика"),
                new Warning("Смерть")
        );
        warningRepository.saveAll(warnings);

        Set<Post> posts = Set.of(
                new Post(1, users.iterator().next(), gameSystems.iterator().next(), gameTypes.iterator().next(),
                        payments.iterator().next(), tags, warnings, 0, "Назва", "Опис", 1, 4,
                        new Date(), new Date(), "Київ", 1.5f, false, true, null)
        );
        postRepository.saveAll(posts);
    }

}