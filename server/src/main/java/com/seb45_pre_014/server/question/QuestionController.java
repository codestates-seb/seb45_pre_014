package com.seb45_pre_014.server.question;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@RequestMapping("/question")
@RequestMapping("/questions")
public class QuestionController {

    @PostMapping // 질문 등록
    public ResponseEntity postQuestion(){
        return ResponseEntity.created(null).build();
    }

    @PatchMapping("/{question-id}") //질문 수정
    public ResponseEntity patchQuestion(){
        return ResponseEntity.ok(null);
    }


    @GetMapping("/question-id") //질문 조회
    public ResponseEntity getQuestion(){
        return ResponseEntity.ok(null);
    }

    @GetMapping("/viewCount") // 조회가 많은 순으로 질문 조회
    public ResponseEntity getQuestionsByViewCount() {
        // 조회가 많은 순으로 질문 조회 로직을 구현하고 반환
        // 예: List<Question> questionsByViewCount = questionService.getQuestionsByViewCount();
        return ResponseEntity.ok(null);
    }


    @GetMapping("/search/{search-keyword}") //질문 조회(검색)
    public ResponseEntity getQuestionBySearch(){
        return ResponseEntity.ok(null);
    }


//    @GetMapping("/titles") // 질문 타이틀 목록 조회
//    public ResponseEntity getQuestionByTitles() {
//        // 질문 타이틀 목록 조회 로직을 구현하고 반환
//        // 예: List<String> questionByTitles = questionService.getQuestionByTitles();
//        return ResponseEntity.ok(null);
//    }


    @GetMapping("/member/{member-id}") //질문 조회(회원 id로)
    public ResponseEntity getQuestionByMemberId(){
        return ResponseEntity.ok(null);
    }


    @DeleteMapping("/{question-id}") //질문 삭제
    public ResponseEntity deleteQuestion(){
        return ResponseEntity.noContent().build();
    }



}



//질문글 목록 화면 //get /list
//질문글 생성 화면 //get //create
//질문글 생성 //post /create
//질문글 상세페이지 //get /{id}
//질문글 수정페이지//get /{id}/edit
//질문글 수정//post /{id}/edit
//질문글 삭제///post /{id}/delete