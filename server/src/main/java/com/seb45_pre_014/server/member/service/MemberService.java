package com.seb45_pre_014.server.member.service;

import com.seb45_pre_014.server.exception.BusinessLogicException;
import com.seb45_pre_014.server.exception.ExceptionCode;
import com.seb45_pre_014.server.member.auth.utils.CustomAuthorityUtils;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;


    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    /* 회원가입 */
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        //password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        //DB에 UserRole 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);
        return savedMember;
    }

    /* 회원 정보 수정 */
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getMembername())
                .ifPresent(membername -> findMember.setMembername(membername));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));


        return memberRepository.save(findMember);

    }

    /* 특정 회원 정보 조회 */
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    @Transactional
    /* 회원 정보 삭제 */
    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.deleteById(findMember.getMemberId());
    }

    /* 이미 존재하는 회원인지를 검증하는 메서드 */
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    /* 이미 등록된 이메일인지를 검증하는 메서드 */
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

}
