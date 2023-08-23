package com.seb45_pre_014.server.answer.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AnswerPostDto {

    @Positive
    private long memberId;
    @Setter
    private long questionId;
    @NotBlank(message = "내용을 작성해주세요.")
    private String content;
}
