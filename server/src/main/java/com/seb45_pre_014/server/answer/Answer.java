package com.seb45_pre_014.server.answer;

import com.seb45_pre_014.server.comment.Comment;
import com.seb45_pre_014.server.member.Member;
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
    private Long answer_id;

    @Column( columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne
    @JoinColumn(name = "comment_id")
    private Comment comment;
}
