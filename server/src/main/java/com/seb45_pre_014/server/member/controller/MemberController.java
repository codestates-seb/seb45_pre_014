package com.seb45_pre_014.server.member.controller;


import com.seb45_pre_014.server.member.auth.jwt.JwtTokenizer;
import com.seb45_pre_014.server.member.dto.MemberDto;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.mapper.MemberMapper;
import com.seb45_pre_014.server.member.service.MemberService;
import com.seb45_pre_014.server.utils.UriCreator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;


@RestController
@RequestMapping("/members")
@Validated
public class MemberController {

   public final static String USER_DEFAULT_URL = "/members";
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final JwtTokenizer jwtTokenizer;

    public MemberController(MemberService memberService, MemberMapper memberMapper, JwtTokenizer jwtTokenizer) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
        this.jwtTokenizer = jwtTokenizer;
    }

    /**회원가입**/
    @PostMapping("/signup")
    public ResponseEntity registerMember(@Valid @RequestBody MemberDto.Post memberPostDto) {
        Member member = memberMapper.memberPostDtoToMember(memberPostDto);

        Member response = memberService.createMember(member);

        URI location = UriCreator.createUri(USER_DEFAULT_URL, response.getMemberId());

        return ResponseEntity.created(location).build();
    }

    /**회원수정**/
    @PatchMapping("/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch memberPatchDto) {
        memberPatchDto.setMemberId(memberId);

        Member response =
                memberService.updateMember(memberMapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(memberMapper.memberToMemberPatchResponeDto(response),
                HttpStatus.OK);
    }

    /**회원정보**/
    @GetMapping("/{memberId}")
    public ResponseEntity getMember(@PathVariable("memberId") @Positive long memberId) {
        Member response = memberService.findMember(memberId);

        return new ResponseEntity<>(memberMapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    /**회원삭제**/
    @DeleteMapping("/{memberId}")
    public ResponseEntity deleteMember(
            @PathVariable("memberId") @Positive long memberId,
            @RequestParam("password") String password) {

        memberService.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }





}

