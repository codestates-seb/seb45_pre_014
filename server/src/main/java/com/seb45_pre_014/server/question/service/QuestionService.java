package com.seb45_pre_014.server.question.service;

import com.seb45_pre_014.server.exception.BusinessLogicException;
import com.seb45_pre_014.server.exception.ExceptionCode;
import com.seb45_pre_014.server.member.auth.jwt.JwtTokenizer;
import com.seb45_pre_014.server.question.entity.Question;
import com.seb45_pre_014.server.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Map;
import java.util.Optional;



@Service
@Transactional
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final JwtTokenizer jwtTokenizer;

    public QuestionService(QuestionRepository questionRepository, JwtTokenizer jwtTokenizer) {
        this.questionRepository = questionRepository;
        this.jwtTokenizer = jwtTokenizer;
    }

    public Question findByQuestionId(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    public void checkMemberId(long memberId, String accessToken){

        String secretKey = jwtTokenizer.getSecretKey();
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(secretKey);

        String jws = accessToken.replace("Bearer ", "");

        Map<String, Object> claimes = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        int id = (int)claimes.get("memberId");

        long findMemberId = (long) id;


//        long findMemberId = jwtTokenizer.getClaims(accessToken, base64EncodedSecretKey);

        if(memberId != findMemberId){
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }

    }

    public Question createQuestion(Question question){
        return questionRepository.save(question);
    }




    public Question updateQuestion(Question question, String accessToken){

        Question findQuestion = findByQuestionId(question.getQuestionId());

        checkMemberId(findQuestion.getMember().getMemberId(), accessToken);

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(long questionId) {
        return findByQuestionId(questionId);
    }

    public Page<Question> findQuestions(int page, int size){

        return questionRepository.findAll(
                PageRequest.of(page,size, Sort.by("questionId").descending()));
    }

    public void deleteQuestion(long questionId, String accessToken){
        Question question = findByQuestionId(questionId);

        checkMemberId(question.getMember().getMemberId(), accessToken);

        questionRepository.delete(question);
    }







}
