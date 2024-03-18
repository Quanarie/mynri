package com.mynri.mynri.post;

import com.mynri.mynri.post.payment.Payment;
import com.mynri.mynri.post.system.GameSystem;
import com.mynri.mynri.post.type.GameType;
import com.mynri.mynri.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.Date;

@Entity
@Getter
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    private final User creator;

    @ManyToOne
    private final GameSystem gameSystem;

    @ManyToOne
    private final GameType gameType;

    @ManyToOne
    private final Payment payment;

    private final int paymentValue;

    private final String title;
    private final String content;
    private final int bookedPlayers;
    private final int maxPlayers;
    private final Date creationDate;
    private final Date gameDate;
    private final String place;
    private final float duration;
    private final boolean isOnline;
    private final boolean isApproved;
}
