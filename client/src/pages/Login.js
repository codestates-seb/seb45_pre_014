import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import TopLogo from "../assets/Stack_Overflow_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailForm = /[a-z0-9]+@[a-z]+.[a-z]{2,6}/;
  const passwordForm = /^.{8,}&/;
  const navigate = useNavigate();

  useEffect(() => {
    if (!email.length) {
      setEmailError("Email cannot be empty.");
    } else if (!emailForm.test(email)) {
      setEmailError("The email is not a valid email address.");
    } else {
      setEmailError("");
    }
  }, [email, emailForm]);

  useEffect(() => {
    if (!password.length) {
      setPasswordError("Password cannot be empty.");
    } else if (!passwordForm.test(password)) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("This password is available");
    }
  }, [password, passwordForm]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const URL = `https://7e9b-116-38-208-5.ngrok-free.app/members/login`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email.length && password.length && emailForm.test(email) /*&& passwordForm.test(password)*/
    ) {
      console.log("Login success");
      setEmailError("");
      setPasswordError("");
      console.log(email,password)
      try {
        const userInfo = {
          email,
          password,
        };
        axios
          .post(URL, userInfo)
          .then((res) => {
            //Success
            console.log(res);
            
            const accessToken = res.data.access_token;
            console.log(accessToken)
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem("memberId", res.data.memberId);
            navigate("/Home");
          })
          .catch((error) => {
            //fail
            console.log(error);
            console.log(emailError);
            console.log(passwordError);
          });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "/oauth2/authorization/google";
  }

    return (
        <>
          <header>
          </header>
          <main>
            <LoginPageBox>
              <LoginBox>
                <LoginLogo href="#">
                  <LoginLogoImg src={TopLogo} alt="logo" />
                </LoginLogo>
    
                <SocialLoginBtn onClick={handleGoogleLogin}>
                  <SocialLoginLinkBox>
                    <SocialLoginLogo>
                      <FcGoogle className="logo" />
                    </SocialLoginLogo>
                    <SocialLoginContent>Log in with Google</SocialLoginContent>
                  </SocialLoginLinkBox>
                </SocialLoginBtn>
    
                <UserLoginFormBox>
                  <form>
                    <EmailFormBox>
                      <EmailIndicator>Email</EmailIndicator>
                      <EmailInput value={email} onChange={handleEmailChange} />
                    </EmailFormBox>
                    <PasswordFormBox>
                      <PasswordGuideBox>
                        <PasswordIndicator>Password</PasswordIndicator>
                        <FindPassword href="#">Forgot Password?</FindPassword>
                      </PasswordGuideBox>
                      <PasswordInput
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordError && <span>{passwordError}</span>}
                    </PasswordFormBox>
                    <LoginSubmitBox>
                      <LoginSubmitBtn onClick={handleSubmit}>Log in</LoginSubmitBtn>
                    </LoginSubmitBox>
                  </form>
                </UserLoginFormBox>
    
                <SignUpLinkBox>
                  <SignUpText>Don&apos;t have an account?</SignUpText>
                  <SignUpLink to="/signup">Sign up</SignUpLink>
                </SignUpLinkBox>
              </LoginBox>
            </LoginPageBox>
          </main>
        </>
      );
}

const LoginPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;
  height: 100vh;
  width: 100vw;
`;

const LoginBox = styled.div`
  width: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginLogo = styled.a`
  display: block;
  width: 62px;
  height: 67px;
  margin-bottom: 20px;
`;

const LoginLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SocialLoginBtn = styled.div`
  /* width: 278px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  /* padding: 10px; */
  line-height: 15px;
  height: 40px;
  background-color: #fff; //#232629;
  border: 1px solid #ccc; //#232629;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #f2f2f2; //#000000;
  }
`;

const SocialLoginLinkBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLoginLogo = styled.div`
  display: block;
  width: 18px;
  height: 18px;
  margin-right: 5px;

  .logo {
    color: black; //#fff;
  }
`;

const SocialLoginContent = styled.div`
  color: black; //#fff;
  font-size: 15px;
`;

const UserLoginFormBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 234px;
  padding: 24px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 4px #d9d9d9;
  margin-bottom: 30px;
`;

const EmailFormBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const EmailIndicator = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #0c0d0e;
  font-size: 15px;
  text-align: left;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    border: 1px solid #59a4de;
    outline: none;
  }
`;

const PasswordFormBox = styled.div`
  margin-bottom: 15px;
  > span {
    font-size: 12px;
  }
`;

const PasswordGuideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const PasswordIndicator = styled.div`
  font-weight: bold;
  color: #0c0d0e;
  font-size: 15px;
`;

const FindPassword = styled.a`
  text-decoration: none;
  color: #0074cc;
  font-size: 12px;

  &:hover {
    color: #0a95ff;
  }
`;

const PasswordInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
    border: 1px solid #59a4de;
    outline: none;
  }
`;

const LoginSubmitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSubmitBtn = styled(Link)`
  width: 100%;
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: #07c;
  }

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  &:active {
    background-color: #0064bd;
    box-shadow: none;
  }
`;

const SignUpLinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpText = styled.div`
  color: #232629;
  font-size: 14px;
  margin-right: 5px;
`;

const SignUpLink = styled(Link)`
  color: #0074cc;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #0a95ff;
  }
`;

export default LoginPage;