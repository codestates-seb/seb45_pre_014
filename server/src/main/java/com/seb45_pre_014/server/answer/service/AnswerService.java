package com.seb45_pre_014.server.answer.service;

import com.seb45_pre_014.server.answer.dto.AnswerResponseDto;
import com.seb45_pre_014.server.answer.entity.Answer;
import com.seb45_pre_014.server.answer.mapper.AnswerMapper;
import com.seb45_pre_014.server.answer.repository.AnswerRepository;
import com.seb45_pre_014.server.exception.BusinessLogicException;
import com.seb45_pre_014.server.exception.ExceptionCode;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.service.MemberService;
import com.seb45_pre_014.server.question.entity.Question;
import com.seb45_pre_014.server.question.service.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;
    private final AnswerMapper answerMapper;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService,
                         QuestionService questionService, AnswerMapper answerMapper) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
        this.answerMapper = answerMapper;
    }

    public Answer createAnswer(Answer answer) {

        // 답변을 할 수 있는지 검증
        verifyAnswer(answer);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {

        Answer findAnswer = findVerifyAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        return answerRepository.save(findAnswer);
    }


    public void deleteAnswer(long answerId) {

        Answer findAnswer = findVerifyAnswer(answerId);
        findAnswer.setAnswerStatus(Answer.AnswerStatus.ANSWER_DELETE);
        answerRepository.save(findAnswer);
    }

    // Answer를 수정하기 위해선 Answer가 있는지 검증
    public Answer findVerifyAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);

        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }

    // createAnswer 하기위해서 필요
    public void verifyAnswer(Answer answer) {

        // member가 존재하는지 확인
        Member member = memberService.findMember(answer.getMember().getMemberId());
        answer.setMember(member);

        // 질문이 존재하는지 확인
        Question question = questionService.findQuestion(answer.getQuestion().getQuestionId());
        answer.setQuestion(question);
    }

    public List<AnswerResponseDto> findAnswersByMemberIdAndQuestionId(long memberId, long questionId) {
        List<AnswerResponseDto> Dto = findAnswers();
        return Dto.stream().filter(id -> id.getMemberId() == memberId && id.getQuestionId() == questionId).collect(Collectors.toList());
    }


    public List<AnswerResponseDto> findAnswers() {
        List<Answer> answers = answerRepository.findAll();
        return answerMapper.AnswerToAnswerResponseDtos(answers);
    }

    public List<AnswerResponseDto> findAnswerByMemberId(long memberId) {
        List<AnswerResponseDto> Dto = findAnswers();
        return Dto.stream().filter(d -> d.getMemberId() == memberId).collect(Collectors.toList());
    }

    public List<AnswerResponseDto> findAnswerByQuestionId(long questionId) {
        List<AnswerResponseDto> Dto = findAnswers();
        return Dto.stream().filter(d -> d.getQuestionId() == questionId).collect(Collectors.toList());
    }
}
