package com.seb45_pre_014.server.member.auth.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.seb45_pre_014.server.exception.BusinessLogicException;
import com.seb45_pre_014.server.exception.ExceptionCode;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.repository.MemberRepository;
import com.seb45_pre_014.server.response.AuthResponse;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Optional;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
        public void onAuthenticationSuccess(HttpServletRequest request,
                                            HttpServletResponse response,
                                            Authentication authentication) throws IOException {

        Member member = (Member) authentication.getPrincipal();
        successResponse(response, member);

        }

        private void successResponse(HttpServletResponse response, Member member) throws IOException{

            Gson gson = new Gson();

            LoginUser loginUser = new LoginUser();
            loginUser.setMemberId(member.getMemberId());

            response.setStatus(HttpStatus.OK.value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.getWriter().write(gson.toJson(loginUser, LoginUser.class));


        }

        @Getter
        @Setter
        private class LoginUser{
          private long memberId;
        }
    }

