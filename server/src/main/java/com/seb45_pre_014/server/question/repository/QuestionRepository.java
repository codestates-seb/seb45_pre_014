package com.seb45_pre_014.server.question.repository;

import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByMember(Member member);

    //title과 content 필드를 모두 포함하는 Question 엔티티를 검색하는 메서드
    Page<Question> findByTitleContainingIgnoreCaseAndContentContainingIgnoreCase(String title, String content, Pageable pageable);
    // title 필드를 포함하는 엔티티를 검색하는 메서드
    Page<Question> findByTitleContainingIgnoreCase(String title, Pageable pageable);

    // content 필드를 포함하는 question 엔티티를 검색하는 메서드
    Page<Question> findByContentContainingIgnoreCase(String content, Pageable pageable);

    //모든 질문을 검색하는 메서드
    @Override
    Page<Question> findAll(Pageable pageable);


}
