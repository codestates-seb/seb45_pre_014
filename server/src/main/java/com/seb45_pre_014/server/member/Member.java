package com.seb45_pre_014.server.member;

import com.seb45_pre_014.server.answer.Answer;
import com.seb45_pre_014.server.comment.Comment;
import com.seb45_pre_014.server.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memebr_id;

    @Column(length = 50, nullable = false)
    private String username;

    @Column(length = 50, nullable = false)
    private String password;

    @Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private LocalDateTime createdDate;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Answer> answers;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Question> questions;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Comment> comments;

}
