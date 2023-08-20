package com.seb45_pre_014.server.answer;

import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.question.entity.Question;

public interface AnswerMapper {

    default Answer answerPostDtoToAnswer (AnswerDto.Post answerPostDto){
        Member member = new Member();
        member.setMemberId(answerPostDto.getMemberId());

        Question question = new Question();
        question.setQuestionId(answerPostDto.getQuestionId());

        Answer answer = new Answer();
        answer.setMember(member);
        answer.setQuestion(question);

        answer.setContent(answerPostDto.getContent());

        return answer;
    }
}
