package com.seb45_pre_014.server.question.dto;

import java.time.LocalDateTime;

public class QuestionResponseDto {

    private Long questionId;
    private String title;
    private String content;
    private int viewCount;
    private LocalDateTime createdAt;
}
