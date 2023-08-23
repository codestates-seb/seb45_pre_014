package com.seb45_pre_014.server.question.entity;

import com.seb45_pre_014.server.answer.entity.Answer;
import com.seb45_pre_014.server.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 50,nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT",nullable = false)
    private String content;

    @Column(nullable = false, columnDefinition = "integer default 0")
    private int viewCount;

    @Column(nullable = false, name = "created_date")
    private LocalDateTime createdAt = LocalDateTime.now();


    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>(); // 질문이 삭제되면 답변도 삭제되게, 엔티티가 저장될 때 연관된 Answer 엔티티도 함께 저장




    public void addMember(Member member){
        this.member = member;
    }

    @Enumerated(EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;



    public enum QuestionStatus{
        QUESTION_REGISTRATION ("질문 등록 상태"),
        QUESTION_ANSWERED("답변 완료 상태"),
        QUESTION_DELETE("질문 삭제 상태");

        @Getter

        private String questionStatus;
        QuestionStatus(String questionStatus) {
            this.questionStatus = questionStatus;
        }
    }
    public void increaseViewCount(){
        this.viewCount++;
    }



}
