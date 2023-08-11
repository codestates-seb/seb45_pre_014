package com.seb45_pre_014.server.question.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class QuestionDto {

    @Getter
    @Setter
    public static class Post{

        @NotNull
        private long memberId;
        @NotNull
        private String title;
        @NotNull
        private String content;

        public Post(long memberId, String title, String content) {
            this.memberId = memberId;
            this.title = title;
            this.content = content;
        }
    }

    @Getter
    @Setter
    public static class Patch{

        @NotNull
        private long questionId;
        @NotNull
        private String title;
        @NotNull
        private String content;

        public Patch(long questionId, String title, String content) {
            this.questionId = questionId;
            this.title = title;
            this.content = content;
        }
    }

}
