package com.seb45_pre_014.server.question.mapper;

import com.seb45_pre_014.server.answer.entity.Answer;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.question.dto.QuestionDto;
import com.seb45_pre_014.server.question.dto.QuestionResponseDto;
import com.seb45_pre_014.server.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {


    default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto){

        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        Question question = new Question();
        question.setTitle(questionPostDto.getTitle());

        question.setContent(questionPostDto.getContent());
        question.setMember(member);

        return question;
    }


    Question patchDtoToQuestion(QuestionDto.Patch patchQuestion);


    default QuestionResponseDto.DetailResponse questionToQuestionDetailResponseDto(Question question){

        // question -> 테이블에 갔다온 엔티티
        //
        // question -> QuestionResponseDto.DetailsResponse

        // question 엔티티 -> member 변수 -> member 엔티티 -> member Id / email / nickName

        QuestionResponseDto.DetailResponse response = QuestionResponseDto.DetailResponse.builder()
                .questionId(question.getQuestionId())
                .title(question.getTitle())
                .content(question.getContent())
                .createdAt(question.getCreatedAt())
                .memberId(question.getMember().getMemberId())
                .email(question.getMember().getEmail())
                .membername(question.getMember().getMembername())
                .build();

        // question 엔티티 -> List<Answer> answers
        // [[answer1], [answer2], ... ]

        List<Answer> answers = question.getAnswers();
        // List<Answer> -> List<QuestionResponseDto.AnswerResponse>

        List<QuestionResponseDto.AnswerResponse> answerResponseDto =
                answers.stream()
                        .map(answer -> QuestionResponseDto.AnswerResponse.builder()
                                .answerId(answer.getAnswerId())
                                .content(answer.getContent())
                                .createdAt(answer.getCreated_at())
                                .memberId(answer.getMember().getMemberId())
                                .email(answer.getMember().getEmail())
                                .membername(answer.getMember().getMembername())
                                .questionId(answer.getQuestion().getQuestionId())
                                .build())
                        .collect(Collectors.toList());

        response.setAnswers(answerResponseDto);

        return response;
    }



    List<QuestionResponseDto.DetailResponse> questionToQuestionDetailResponseDtos(List<Question> questions);












////    @Mappings({
////            @Mapping(target = "questionId", ignore = true),
////            @Mapping(target = "viewCount", ignore = true),
////            @Mapping(target = "createdAt", ignore = true),
////            @Mapping(target = "member", ignore = true),
////            @Mapping(target = "answers", ignore = true),
////            @Mapping(target = "questionStatus", ignore = true)
////    })
////
////    Question postDtoToQuestion(QuestionDto.Post postQuestion);
//
//    default Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto){
//
//        Member member = new Member();
//        member.setMemberId(questionPostDto.getMemberId());
//
//        Question question = new Question();
//        question.setTitle(questionPostDto.getTitle());
//
//        question.setContent(questionPostDto.getContent());
//        question.setMember(member);
//
//        return question;
//    }
//
//
//
////    @Mappings({
////            @Mapping(target = "questionId", ignore = true),
////            @Mapping(target = "viewCount", ignore = true),
////            @Mapping(target = "createdAt", ignore = true),
////            @Mapping(target = "member", ignore = true),
////            @Mapping(target = "answers", ignore = true),
////            @Mapping(target = "questionStatus", ignore = true)
////    })
//    Question patchDtoToQuestion(QuestionDto.Patch patchQuestion);
//
//    QuestionResponseDto questionToQuestionResponseDto(Question question);
//
//    List<QuestionResponseDto> questionToQuestionResponseDtos(List<Question> questions);
}
