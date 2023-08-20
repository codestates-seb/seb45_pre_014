package com.seb45_pre_014.server.answer;

import lombok.Getter;
import lombok.Setter;

public class AnswerDto {

    @Getter
    @Setter
    public static class Post{

        private long memberId;
        private long questionId;
        private String content;

    }






}