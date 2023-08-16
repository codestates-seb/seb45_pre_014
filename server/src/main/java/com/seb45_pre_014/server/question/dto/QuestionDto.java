package com.seb45_pre_014.server.question.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;


public class QuestionDto {

    @Getter
    @Setter
    public static class Post {

        @Positive
        private long memberId;
        @NotBlank
        @Size(min = 1, max = 50, message = "질문제목을 입력하시고 50자를 넘길 수 없습니다.")
        private String title;
        @NotBlank(message = "내용을 입력하세요.")
        private String content;

    }

    @Getter
    @Setter
    public static class Patch {

        private long questionId;

        @Size(min = 1, max = 50, message = "질문제목은 50자를 넘길 수 없습니다.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        private String content;

    }

}
