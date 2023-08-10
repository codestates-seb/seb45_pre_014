package com.seb45_pre_014.server.question;

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
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long question_id;

    @Column( length = 50,nullable = false)
    private String title;

    @Column( columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column(nullable = false)
    private int count;

    @Column(nullable = false)
    private LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private Comment comment; // 질문이 삭제되면 답변도 삭제되게
}
