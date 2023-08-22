package com.seb45_pre_014.server.answer.mapper;

import com.seb45_pre_014.server.answer.dto.AnswerPatchDto;
import com.seb45_pre_014.server.answer.dto.AnswerPostDto;
import com.seb45_pre_014.server.answer.dto.AnswerResponseDto;
import com.seb45_pre_014.server.answer.entity.Answer;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

//    @Mapping(source = "memberId", target = "member.memberId")
//    @Mapping(source = "questionId", target = "question.questionId")
////    @Mapping(source = "membername", target = "member.membername")
//    Answer AnswerPostDtoToAnswer(AnswerPostDto answerPostDto);

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        Answer answer = new Answer();
        Member member = new Member();
        Question question = new Question();

        member.setMemberId(answerPostDto.getMemberId());
        question.setQuestionId(answerPostDto.getQuestionId());

        answer.setMember(member);
        answer.setQuestion(question);

        answer.setContent(answerPostDto.getContent());

        return answer;
    }


    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

//    @Mapping(source = "member.memberId", target = "memberId")
//    @Mapping(source = "question.questionId", target = "questionId")
////    @Mapping(source = "member.membername", target = "membername")
//    AnswerResponseDto AnswerToAnswerResponseDto(Answer answer);
default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {

    AnswerResponseDto response = AnswerResponseDto.builder()
            .answerId(answer.getAnswerId())
            .content(answer.getContent())
            .memberId(answer.getMember().getMemberId())
            .membername(answer.getMember().getMembername())
            .questionId(answer.getQuestion().getQuestionId())
            .createdAt(answer.getCreated_at())
            .build();

    return response;
}

    List<AnswerResponseDto> AnswerToAnswerResponseDtos(List<Answer> answers);


}

