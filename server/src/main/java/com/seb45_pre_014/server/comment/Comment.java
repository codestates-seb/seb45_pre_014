package com.seb45_pre_014.server.comment;

import com.seb45_pre_014.server.answer.Answer;
import com.seb45_pre_014.server.member.Member;
import com.seb45_pre_014.server.question.Question;
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
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coment_id;

    @Column( columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime created_at;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @OneToOne(mappedBy = "comment", cascade = CascadeType.ALL, orphanRemoval = true)
    private Answer answer; //답변이 삭제되면 댓글도 삭제되게
}
