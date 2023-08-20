package com.seb45_pre_014.server.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;


public class QuestionResponseDto {



    @Getter
    @Setter
    @Builder
    public static class DetailResponse{
        private long questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;

        private long memberId;
        private String email;
        private String membername;
        private List<AnswerResponse> answers;
    }


    @Builder
    @Getter @Setter
    public static class AnswerResponse {
        private long answerId;
        private String content;
        private LocalDateTime createdAt;

        private long memberId;
        private String email;
        private String membername;
        private long questionId;

    }




//    private long questionId;
//    private String title;
//    private String content;
//    private int viewCount;
//    private LocalDateTime createdAt;
//    private Question.QuestionStatus questionStatus;



//    private MemberDto.Response member;

//    private List<AnswerResponseDto> answers;

}
