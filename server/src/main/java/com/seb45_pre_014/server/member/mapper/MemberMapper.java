package com.seb45_pre_014.server.member.mapper;

import com.seb45_pre_014.server.member.dto.MemberDto;
import com.seb45_pre_014.server.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberPostDtoToMember(MemberDto.Post memberPostDto);
    Member memberPatchDtoToMember(MemberDto.Patch memberPatchDto);

    MemberDto.PatchResponse memberToMemberPatchResponeDto(Member member);

    /** 회원 정보 조희 **/
    default MemberDto.Response memberToMemberResponseDto(Member member){

        MemberDto.Response memberResponseDto = MemberDto.Response.builder()
                .memberId(member.getMemberId())
                .email(member.getEmail())
                .membername(member.getMembername())
                .password(member.getPassword())
                .build();

        return memberResponseDto;

        }



}