package com.seb45_pre_014.server.answer.dto;

import com.seb45_pre_014.server.answer.entity.Answer;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerPatchDto {


    private long answerId;

//    private Answer.AnswerStatus answerStatus;

    @NotBlank(message = "내용을 작성해주세요.")
    private String content;

}