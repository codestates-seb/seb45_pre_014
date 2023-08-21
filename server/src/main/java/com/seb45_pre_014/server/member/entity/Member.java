package com.seb45_pre_014.server.member.entity;

import com.seb45_pre_014.server.answer.entity.Answer;
import com.seb45_pre_014.server.comment.Comment;
import com.seb45_pre_014.server.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Member  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String membername;

    private String email;
    @Column(length = 250, nullable = false)
    private String password;



    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Answer> answers;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Question> questions;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Comment> comments;


    public Member(String membername, String email, String password) {
        this.membername = membername;
        this.email = email;
        this.password = password;

    }
}
