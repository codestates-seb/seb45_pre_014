package com.seb45_pre_014.server.answer.entity;


import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(columnDefinition = "text")
    private String content;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_REGISTRATION;

    @Column(nullable = false, name = "created_date")
    private LocalDateTime created_at = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    public enum AnswerStatus {
        ANSWER_REGISTRATION("답변 등록"),
        ANSWER_DELETE("답변 삭제");

        @Getter
        private final String status;

        AnswerStatus(String status) {
            this.status = status;
        }

    }

}