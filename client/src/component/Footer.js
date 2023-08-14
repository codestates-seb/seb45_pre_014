import styled from "styled-components";
import Footerlogo from "../assets/Stack_Overflow_icon.png";

export const FooterContainer = styled.footer`
  width: 100vw;
  height: max-content;
  background-color: #232629;
  color: #9099a1;
  padding: 10px 0 0;
  display: flex;
  ul, li {
    list-style: none;
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 32px 12px 12px;
    width: 100vw;
    max-width: 1264px;
    margin: 0 auto;

    .foot-logo {
        flex: 0 0 64px;
        margin: -12px 0 32px;
        width: 64px;
        height: 64px;
    }

    .menu-container {
        display: flex;
        flex: 2 1 auto;

        > ul {
            flex: 1 0 auto;
            padding: 0 12px 24px 0;
            > h5 {
                margin: 0 0 12px;
                color: #babfc4;
                font-weight: bold;
                font-size: 13px;
            }
        }
    }
    .sns-copyright {
        display: flex;
        flex-direction: column;
        flex: 1 1 150px;
        font-size: 11px;
        justify-content: space-between;
        text-align: left;
        .sns-container {
            > ul {
                padding: 0;
                display: flex;
                gap: 12px;

                > li {
                    padding: 4px 0;
                }
            }
        }
    }
    .p {
        margin: auto 0 24px;
        font-size: 11px;

        > span {
            display: inline-block;
            > a {
                text-decoration: underline;
            }
        }
    }
  }
`;

function Footer() {
    return (
        <FooterContainer>
            <ul className="footer-container">
                <li className="foot-logo">
                    <img src={Footerlogo} alt="logo" width="64px" height="64px" />
                </li>

                <li className="menu-container">
                    <ul>
                        <h5>STACK OVERFLOW</h5>
                        <li>Questions</li>
                        <li>Help</li>
                    </ul>
                    <ul>
                        <h5>PRODUCTS</h5>
                        <li>Teams</li>
                        <li>Advertising</li>
                        <li>Collectives</li>
                        <li>Talent</li>
                    </ul>
                    <ul>
                        <h5>COMPANY</h5>
                        <li>About</li>
                        <li>Press</li>
                        <li>Work Here</li>
                        <li>Legal</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Contact Us</li>
                        <li>Cookie Setting</li>
                        <li>Cookie Policy</li>
                    </ul>
                    <ul>
                        <h5>STACK EXCHANGE NETWORK</h5>
                        <li>Technology</li>
                        <li>Culture & recreation</li>
                        <li>Life & arts</li>
                        <li>Science</li>
                        <li>Professional</li>
                        <li>Business</li>
                        <br />
                        <li>API</li>
                        <li>Data</li>
                    </ul>
                </li>
                <li className="sns-copyright">
                    <div className="sns-container">
                        <ul>
                            <li>Blog</li>
                            <li>FaceBook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <p className="copyright-container">
                        Site design / logo © 2023 Stack Exchange Inc; user
                        <br /> contributions licensed under CC BY-SA
                        <br />. rev 2023.8.10.43574
                    </p>
                </li>
            </ul>
        </FooterContainer>
    );
}

export default Footer;