package com.seb45_pre_014.server.member.service;

import com.seb45_pre_014.server.exception.BusinessLogicException;
import com.seb45_pre_014.server.exception.ExceptionCode;
import com.seb45_pre_014.server.member.auth.utils.CustomAuthorityUtils;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;


    /* 회원 가입 */
        public Member createMember(Member member) {
            if (member.getPassword() != null) {
                String encryptedPassword = passwordEncoder.encode(member.getPassword());
                member.setPassword(encryptedPassword);
            } else {
                System.out.println("null");            }

            if (!existsEmail(member.getEmail())) {
                Member savedMember = memberRepository.save(member);
                return savedMember;
            }

            return null;

        }

        /*주어진 이메일이 있는지*/
        public boolean existsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        return member.isPresent();
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
    @Transactional(readOnly = true)
    /* 특정 회원 정보 조회 */
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }


    /* 회원 정보 삭제 */
    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        memberRepository.deleteById(findMember.getMemberId());
    }

    /* 이미 존재하는 회원인지를 검증하는 메서드 */
    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }





}
