import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { ImPriceTags, ImTrophy } from "react-icons/im";
import { FaQuestionCircle, FaSort } from "react-icons/fa";
import { InputItem } from "../component/CreateContent";
import { Link } from "react-router-dom";

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f1f2f3;

  a {
    text-decoration: none;
    color: inherit;
    color: #0074cc;

    cursor: pointer;
    &:hover {
      color: #0a95ff;
    }
  }
`;
export const DivContent = styled.div`
  display: flex;
`;

export const LeftDiv = styled.div`
  margin-right: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    margin-bottom: 32px;
    font-size: 27px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
  }
  > div:not(:last-child) {
    display: flex;
    align-items: center;
    line-height: 19px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;

    > div {
      line-height: 15px;
      > svg {
        color: #0a95ff;
      }
    }
    > div:last-child {
      display: flex;
    }
  }

  > div:last-child {
    text-align: left;
    font-size: 13px;
    color: #6a737c;
    > div:last-child {
      color: #0074cc;
      cursor: pointer;
      a {
        text-decoration: none;
        color: inherit;
      }
      &:hover {
        color: #0a95ff;
      }
    }
  }
`;
export const IconDiv = styled.div`
  margin-right: 10px;
  width: 30px;
  text-align: center;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 316px;

  > div:last-child {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const OauthDiv = styled.div`
  width: 100%;
  margin: 10px;
  button {
    width: 100%;
    margin: 8px 0;
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    > svg {
      margin-right: 10px;
    }
  }
  .github {
    background-color: #fff;
    border-radius: 5px;
    &:hover {
      background-color: #f2f2f2; //#232629;
    }
  }
`;
export const SignupDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border-radius: 7px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 48px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;

  font-size: 13px;
  text-align: left;
  line-height: 17px;
  margin-bottom: 32px;
`;
export const FormContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  > div {
    label {
      font-size: 15px;
      font-weight: 700;
    }
    p {
      font-size: 11px;
      margin-top: 0;
      color: #6a737c;
    }
  }
  > div:last-child {
    margin-top: 32px;
    font-size: 12px;
    text-align: left !important;
    line-height: 15px;
    vertical-align: baseline;
    color: #6c747d;
    span {
      color: #0a95ff;
    }
  }

  .isName,
  .isEmail,
  .isPassword {
    > p {
      font-size: 11px;
      margin-top: 0;
      color: red;
    }
  }
`;
export const RobotCheckDiv = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px 0 2px 0;
    margin: 6px 0;
    border-radius: 3px;
    border: 1px solid hsl(210, 8%, 75%);
    background-color: #f1f2f3;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;
      border: 1px solid #b0b8bf; //hsl(210, 8%, 75%);
      box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 48px 0px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
      background-color: #ffffff;
    }
    input {
      width: 30px;
      height: 30px;
      margin: 10px;
    }
    label {
      font-size: 15px;
      margin: 10px;
    }
  }
`;
export const CheckDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
  margin: 12px 0;
  input {
    margin: 0;
  }
  > div {
    > label {
      font-size: 12px;
      font-weight: 400;
      vertical-align: middle;
    }
    > svg {
      color: #bcbbbb;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  margin: 4px 0;
  padding: 10px;
  color: white;
  background-color: #0a95ff;
  border-radius: 4px;
  outline: none;
  border: none;

  &:hover {
    background-color: #0074cc;
  }
`;
export const InputEl = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 3px;
  outline: none;

  border: ${(props) => props.border};

  &:focus {
    outline: none !important;
    border: ${(props) => props.focusborder};
    box-shadow: ${(props) => props.shadow};
  }
`;
const Signup = () => {
  return (
    <>
      <header>
      </header>
      <main>
        <DivContainer>
          <DivContent>
            <LeftDiv>
              <h1>Join the Stack Overflow Community</h1>
              <div>
                <IconDiv>
                  <FaQuestionCircle />
                </IconDiv>
                <div>Get unstuck - ask a question</div>
              </div>
              <div>
                <IconDiv>
                  <FaSort />
                </IconDiv>
                <div>Unlock new privileges like voting and commenting</div>
              </div>
              <div>
                <IconDiv>
                  <ImPriceTags />
                </IconDiv>
                <div>
                  Save your favorite questions, answers, watch tags, and more
                </div>
              </div>
              <div>
                <IconDiv>
                  <ImTrophy />
                </IconDiv>
                <div>Earn reputation and badges</div>
              </div>
              <div>
                <div>
                  Collaborate and share knowledge with a private group for FREE.
                </div>
                <div>
                  <a href="https://stackoverflow.co/teams/?utm_source=so-owned&utm_medium=product&utm_campaign=free-50&utm_content=public-sign-up">
                    Get Stack Overflow for Teams free for up to 50 users
                  </a>
                </div>
              </div>
            </LeftDiv>
            <RightDiv>
              {/* <GoogleButton /> */}
              <OauthDiv>
                <button>
                  <FcGoogle />
                  Sign up with Google
                </button>
              </OauthDiv>

              <SignupDiv>
                <FormContainer>
                  {/* 이름 input */}
                  <div>
                    <label htmlFor="display_name">Display name</label>
                    <div className="isName">
                      <InputItem />
                    </div>
                  </div>
                  {/* 이메일 input */}
                  <div className="emailInput">
                    <label htmlFor="email">Email</label>
                    <div className="isEmail">
                      <InputItem />
                    </div>
                  </div>
                  {/* 패스워드 input */}
                  <div className="passwordInput">
                    <label htmlFor="password">Password</label>
                    <div className="isPassword">
                      <InputItem />
                    </div>
                    <p>
                      Passwords must contain at least eight characters,
                      including at least 1 letter and 1 number.{" "}
                    </p>
                  </div>
                  <div>
                    <RobotCheckDiv>
                      <div>
                        <div>
                          <input type="checkbox" id="robot" />
                          <div>
                            <label>{`I'm not a robot`}</label>
                          </div>
                        </div>
                      </div>
                    </RobotCheckDiv>
                    <CheckDiv>
                      <div>
                        <input type="checkbox" id="opt_in"></input>
                      </div>
                      <div>
                        <label htmlFor="opt_in">
                          Opt-in to receive occasional product updates, user
                          research invitations, company announcements, and
                          digests.
                        </label>
                      </div>
                      <div>
                        <FaQuestionCircle />
                      </div>
                    </CheckDiv>
                  </div>
                  <div>
                    <button>
                      Sign up
                    </button>
                  </div>
                  <div>
                    By clicking “Sign up”, you agree to our{" "}
                    <span>
                      <a href="https://stackoverflow.com/legal/terms-of-service/public">
                        terms of service
                      </a>
                    </span>{" "}
                    and acknowledge that you have read and understand our{" "}
                    <span>
                      <a href="https://stackoverflow.com/legal/privacy-policy">
                        privacy policy
                      </a>
                    </span>{" "}
                    and{" "}
                    <span>
                      <a href="https://stackoverflow.com/conduct">
                        code of conduct.
                      </a>
                    </span>
                  </div>
                </FormContainer>
              </SignupDiv>
              <div>
                Already have an account? <Link to="/">Log in</Link>
              </div>
            </RightDiv>
          </DivContent>
        </DivContainer>
      </main>
    </>
  );
};

export default Signup;