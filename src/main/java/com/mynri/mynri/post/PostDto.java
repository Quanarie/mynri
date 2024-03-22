package com.mynri.mynri.post;

import com.mynri.mynri.post.payment.Payment;
import com.mynri.mynri.post.system.GameSystem;
import com.mynri.mynri.post.tag.Tag;
import com.mynri.mynri.post.type.GameType;
import com.mynri.mynri.post.warning.Warning;
import com.mynri.mynri.user.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;
import java.util.Set;

@Getter
@AllArgsConstructor
public class PostDto {

    private Long id;
    private UserDto creator;
    private GameSystem gameSystem;
    private GameType gameType;
    private Payment payment;
    private Set<Tag> tags;
    private Set<Warning> warnings;
    private int paymentValue;
    private String title;
    private String description;
    private int bookedPlayers;
    private int maxPlayers;
    private Date creationDate;
    private Date gameDate;
    private String place;
    private float duration;
    private boolean isOnline;
    private boolean isApproved;
    private Set<UserDto> subscribers;

}

