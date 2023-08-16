package com.seb45_pre_014.server.answer;


import com.seb45_pre_014.server.comment.Comment;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column( columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @OneToOne
    @JoinColumn(name = "commentId")
    private Comment comment;



}