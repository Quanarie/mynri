package com.mynri.mynri.post;

import com.mynri.mynri.post.payment.Payment;
import com.mynri.mynri.post.system.GameSystem;
import com.mynri.mynri.post.tag.Tag;
import com.mynri.mynri.post.type.GameType;
import com.mynri.mynri.post.warning.Warning;
import com.mynri.mynri.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    @ManyToOne
    private User creator;

    @NonNull
    @ManyToOne
    private GameSystem gameSystem;

    @NonNull
    @ManyToOne
    private GameType gameType;

    @NonNull
    @ManyToOne
    private Payment payment;

    @ManyToMany
    private Set<Tag> tags;

    @ManyToMany
    private Set<Warning> warnings;

    private int paymentValue;
    private String title;
    private String content;
    private int bookedPlayers;
    private int maxPlayers;

    @NonNull
    private Date creationDate;

    @NonNull
    private Date gameDate;

    private String place;
    private float duration;
    private boolean isOnline;
    private boolean isApproved;

    @ManyToMany
    private Set<User> subscribers;

    public static PostDto toDto(Post post) {
        return new PostDto(
                User.toDto(post.creator),
                post.getGameSystem(),
                post.getGameType(),
                post.getPayment(),
                post.getTags(),
                post.getWarnings(),
                post.getPaymentValue(),
                post.getTitle(),
                post.getContent(),
                post.getBookedPlayers(),
                post.getMaxPlayers(),
                post.getCreationDate(),
                post.getGameDate(),
                post.getPlace(),
                post.getDuration(),
                post.isOnline,
                post.isApproved,
                post.getSubscribers().stream().map(User::toDto).collect(Collectors.toSet())
        );
    }

}
