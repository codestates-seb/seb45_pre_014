package com.seb45_pre_014.server.question.controller;


import com.seb45_pre_014.server.question.dto.QuestionDto;
import com.seb45_pre_014.server.question.entity.Question;
import com.seb45_pre_014.server.question.mapper.QuestionMapper;
import com.seb45_pre_014.server.question.service.QuestionService;
import com.seb45_pre_014.server.response.MultiResponseDto;
import com.seb45_pre_014.server.response.SingleResponseDto;
import com.seb45_pre_014.server.utils.UriCreator;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    private final static String QUESTION_DEFAULT_URL = "/questions";

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping // 질문 등록
    public ResponseEntity postQuestion(@RequestBody @Valid QuestionDto.Post questionPostDto) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{question-id}") // 질문 수정
    public ResponseEntity patchQuestion(@PathVariable("question-id")@Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch questionPatchDto,
                                        @RequestHeader(HttpHeaders.AUTHORIZATION) String accessToken){

        questionPatchDto.setQuestionId(questionId);

        Question question
                = questionService.updateQuestion(mapper.patchDtoToQuestion(questionPatchDto), accessToken);

        return new ResponseEntity<>(
                new SingleResponseDto<>(
                        mapper.questionToQuestionDetailResponseDto(question)),HttpStatus.OK);


    }


    @GetMapping("/{question-id}") //질문 조회
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {

        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.questionToQuestionDetailResponseDto(question)),HttpStatus.OK);
    }


    @GetMapping // 질문 조회(전부)
    public ResponseEntity getQuestions(@RequestParam @Positive int page,
                                       @RequestParam @Positive int size) {
        Page<Question> pageQuestions = questionService.findQuestions(page - 1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(mapper.questionToQuestionDetailResponseDtos(questions), pageQuestions), HttpStatus.OK);
    }

//    @GetMapping("/viewCount") // 조회가 많은 순으로 질문 조회
//    public ResponseEntity getQuestionsByViewCount() {
//        // 조회가 많은 순으로 질문 조회 로직을 구현하고 반환
//        // 예: List<Question> questionsByViewCount = questionService.getQuestionsByViewCount();
//        return ResponseEntity.ok(null);
//    }
//
//
//    @GetMapping("/search/{search-keyword}") //질문 조회(검색)
//    public ResponseEntity getQuestionBySearch(){
//        return ResponseEntity.ok(null);
//    }


//    @GetMapping("/titles") // 질문 타이틀 목록 조회
//    public ResponseEntity getQuestionByTitles() {
//        // 질문 타이틀 목록 조회 로직을 구현하고 반환
//        // 예: List<String> questionByTitles = questionService.getQuestionByTitles();
//        return ResponseEntity.ok(null);
//    }


//    @GetMapping("/member/{member-id}") //질문 조회(회원 id로)
//    public ResponseEntity getQuestionByMemberId(){
//        return ResponseEntity.ok(null);
//    }


    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId,
                                         @RequestHeader(HttpHeaders.AUTHORIZATION) String accessToken){
        questionService.deleteQuestion(questionId, accessToken);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
