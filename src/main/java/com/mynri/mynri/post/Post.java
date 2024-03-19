package com.mynri.mynri.post;

import com.mynri.mynri.post.payment.Payment;
import com.mynri.mynri.post.system.GameSystem;
import com.mynri.mynri.post.tag.Tag;
import com.mynri.mynri.post.type.GameType;
import com.mynri.mynri.post.warning.Warning;
import com.mynri.mynri.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    @ManyToOne
    private final User creator;

    @NonNull
    @ManyToOne
    private final GameSystem gameSystem;

    @NonNull
    @ManyToOne
    private final GameType gameType;

    @NonNull
    @ManyToOne
    private final Payment payment;

    @ManyToMany
    private final Set<Tag> tags;

    @ManyToMany
    private final Set<Warning> warnings;

    private final int paymentValue;
    private final String title;
    private final String content;
    private final int bookedPlayers;
    private final int maxPlayers;

    @NonNull
    private final Date creationDate;

    @NonNull
    private final Date gameDate;

    private final String place;
    private final float duration;
    private final boolean isOnline;
    private final boolean isApproved;

    public Post(Post post, User newCreator) {
        this(newCreator, post.getGameSystem(), post.getGameType(), post.getPayment(),
                post.getTags(), post.getWarnings(), post.getPaymentValue(), post.getTitle(),
                post.getContent(), post.getBookedPlayers(), post.getMaxPlayers(),
                post.getCreationDate(), post.getGameDate(), post.getPlace(),
                post.getDuration(), post.isOnline(), post.isApproved());
    }
}
