package com.seb45_pre_014.server.answer.controller;

import com.seb45_pre_014.server.answer.dto.AnswerPatchDto;
import com.seb45_pre_014.server.answer.dto.AnswerPostDto;
import com.seb45_pre_014.server.answer.entity.Answer;
import com.seb45_pre_014.server.answer.mapper.AnswerMapper;
import com.seb45_pre_014.server.answer.service.AnswerService;
import com.seb45_pre_014.server.member.service.MemberService;
import com.seb45_pre_014.server.question.service.QuestionService;
import com.seb45_pre_014.server.response.SingleResponseDto;
import com.seb45_pre_014.server.utils.UriCreator;
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
@RequestMapping("/answers")
@Validated
public class AnswerController {

    private final static String ANSWER_DEFAULT_URL = "/answers";

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

//    private final MemberService memberService;
//    private final QuestionService questionService;

//    public AnswerController(AnswerService answerService, AnswerMapper answerMapper,
//                            MemberService memberService, QuestionService questionService) {
//        this.answerService = answerService;
//        this.answerMapper = answerMapper;
//        this.memberService = memberService;
//        this.questionService = questionService;
//    }

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }


    //댓글 생성//
//    @PostMapping
//    public ResponseEntity<?> postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
//
//        memberService.findMember(answerPostDto.getMemberId());
//        questionService.findQuestion(answerPostDto.getQuestionId());
//        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));
//        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, answer.getAnswerId());
//
//        return ResponseEntity.created(location).build();
//    }

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto) {
        Answer answer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(answerPostDto));
        URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, answer.getAnswerId());
        return ResponseEntity.created(location).build();

    }

    //댓글 수정//
//    @PatchMapping("/{answer-id}")
//    public ResponseEntity<?> patchAnswer(@PathVariable("answer-id") @Positive long answerId,
//                                         @Valid @RequestBody AnswerPatchDto answerPatchDto) {
//
//        answerPatchDto.setAnswerId(answerId);
//        Answer answer = answerService.updateAnswer(answerMapper.AnswerPatchDtoToAnswer(answerPatchDto));
//
//        return new ResponseEntity<>(new SingleResponseDto<>(answerMapper.AnswerToAnswerResponseDto(answer)), HttpStatus.OK);
//    }


    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto,
                                      @RequestHeader(HttpHeaders.AUTHORIZATION) String accessToken) {
        answerPatchDto.setAnswerId(answerId);

        Answer answer = answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(answerPatchDto), accessToken);

        return new ResponseEntity<>(
                new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer)),
                HttpStatus.OK);
    }




    //댓글 조회//
//    @GetMapping("/{answer-id}")
//    public ResponseEntity<?> getAnswer(@PathVariable("answer-id") @Positive long answerId) {
//
//        Answer answer = answerService.findVerifyAnswer(answerId);
//
//        return new ResponseEntity<>(new SingleResponseDto<>(answerMapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
//    }

    //댓글 삭제//
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
                                       @PathVariable("answer-id") @Positive long answerId,
                                       @RequestHeader(HttpHeaders.AUTHORIZATION) String accessToken) {
        answerService.deleteAnswer(answerId, accessToken);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
