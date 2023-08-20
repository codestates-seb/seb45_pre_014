package com.seb45_pre_014.server.member.dto;


import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
public class MemberDto {


    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String membername;

        /* 이메일 유효성 검사 */
        @Pattern(regexp = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$" ,
                message = "올바른 이메일 구성이 아닙니다.")
        private String email;

        /* 패스워드 유효성 검사 */
        @Size(min = 8, message = "비밀번호는 8자 이상이어야합니다.")
        private String password;

    }

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private long memberId;
        private String membername;
        @Size(min = 8, message = "비밀번호는 8자 이상이어야합니다.")
        private String password;


        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }

        public Patch(String membername, String password) {
            this.membername = membername;
            this.password = password;

        }
    }

    /** patch Response **/
    @Builder
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class PatchResponse {

        private long memberId;
        private String email;
        private String membername;
        private String password;

    }

    /** 회원 정보 상세 조회 response **/
    @Builder
    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {

        private long memberId;
        private String email;
        private String membername;
        private String password;


    }


}


