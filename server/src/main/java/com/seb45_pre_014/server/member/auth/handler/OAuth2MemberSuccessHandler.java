package com.seb45_pre_014.server.member.auth.handler;

import com.seb45_pre_014.server.member.auth.jwt.JwtTokenizer;
import com.seb45_pre_014.server.member.auth.utils.CustomAuthorityUtils;
import com.seb45_pre_014.server.member.entity.Member;
import com.seb45_pre_014.server.member.service.MemberService;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.security.SecureRandom;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
        private final JwtTokenizer jwtTokenizer;
        private final CustomAuthorityUtils authorityUtils;
        private final MemberService memberService;

        public OAuth2MemberSuccessHandler(JwtTokenizer jwtTokenizer,
                                          CustomAuthorityUtils authorityUtils,
                                          MemberService memberService) {
            this.jwtTokenizer = jwtTokenizer;
            this.authorityUtils = authorityUtils;
            this.memberService = memberService;
        }

        @Override
        public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
            System.out.println("# Redirect to Frontend");
            var oAuth2User = (OAuth2User)authentication.getPrincipal();
            String email = String.valueOf(oAuth2User.getAttributes().get("email"));
            List<String> authorities = authorityUtils.createRoles(email);

            saveMember(email);
            redirect(request, response, email, authorities);
        }

    private void saveMember(String email) {
        Member member = new Member();
        member.setEmail(email);
        member.setMembername(generateMembernameFromEmail(email));
        member.setPassword(generateRandomPassword());
        memberService.createMember(member);
    }
    private String generateMembernameFromEmail(String email) {
        String membername = email.split("@")[0];
        return membername;
    }

    // 임의의 비밀번호 생성
    private String generateRandomPassword() {
        int length = 10;
        String charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

        SecureRandom random = new SecureRandom();
        String password = random
                .ints(length, 0, charset.length())
                .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
                .toString();
        return password;
    }

        private void redirect(HttpServletRequest request, HttpServletResponse response, String email, List<String> authorities) throws IOException {
            String accessToken = delegateAccessToken(email, authorities);
            String refreshToken = delegateRefreshToken(email);

            String uri = createURI(accessToken, refreshToken).toString();
            getRedirectStrategy().sendRedirect(request, response, uri);
        }

        private String delegateAccessToken(String email, List<String> authorities) {
            Map<String, Object> claims = new HashMap<>();
            claims.put("username", email);
            claims.put("roles", authorities);

            String subject = email;
            Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

            return accessToken;
        }

        private String delegateRefreshToken(String email) {
            String subject = email;
            Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

            String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

            return refreshToken;
        }



    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        // 컨트롤러로 보낸후 프론트로 리다이렉트 시도

        return UriComponentsBuilder.newInstance()
                .scheme("http")
                .host("pre014codestates.s3-website.ap-northeast-2.amazonaws.com")
                .port(80)
                .path("/")
                .queryParams(queryParams)
                .build().toUri();
    }
}
