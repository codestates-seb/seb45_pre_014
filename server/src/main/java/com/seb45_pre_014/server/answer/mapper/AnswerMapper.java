package com.seb45_pre_014.server.answer.mapper;

import com.seb45_pre_014.server.answer.dto.AnswerPatchDto;
import com.seb45_pre_014.server.answer.dto.AnswerPostDto;
import com.seb45_pre_014.server.answer.dto.AnswerResponseDto;
import com.seb45_pre_014.server.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "memberId", target = "member.memberId")
    @Mapping(source = "questionId", target = "question.questionId")
    @Mapping(source = "displayName", target = "member.displayName")
    Answer AnswerPostDtoToAnswer(AnswerPostDto answerPostDto);

    Answer AnswerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "question.questionId", target = "questionId")
    @Mapping(source = "member.displayName", target = "displayName")
    AnswerResponseDto AnswerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> AnswerToAnswerResponseDtos(List<Answer> answers);


}

