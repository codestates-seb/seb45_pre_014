import styled from "styled-components";
import { faPen, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AsideContainer = styled.section`
  width: 300px;
  padding: 20px;
  color: #232629;
  text-align: left;
  margin-bottom: auto;
  margin-top: 21px;
`;

export const SideBanner = styled.aside`
  border: 1px solid #f3eac7;
  background-color: #fdf8e3;
  border-radius: 5px;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const SideTitle = styled.li`
  font-size: 13px;
  padding: 12px 15px;
  border-bottom: 1px solid #f3eac7;
  background-color: #f3eac7;
  font-weight: bold;
  color: #535961;
  text-align: left;
`;

export const SideContent = styled.li`
  display: flex;
  font-size: 11px;
  gap: 1rem;
  background-color: #fdf8e3;
  padding: 0 20px;
  margin: 12px 0;
  a {
    color: #232629;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  .icon-message {
    color: #6db3dc;
  }
`;

const Aside = () => {
    const link = [
        "https://stackoverflow.blog/2023/08/11/why-everyone-should-be-an-appsec-specialist-ep-598/?cb=1", 
        "https://meta.stackexchange.com/questions/391847/moderation-strike-results-of-negotiations?cb=1", 
        "https://meta.stackexchange.com/questions/392048/our-design-vision-for-stack-overflow-and-the-stack-exchange-network?cb=1",
        "https://meta.stackoverflow.com/questions/421831/temporary-policy-generative-ai-e-g-chatgpt-is-banned?cb=1", 
        "https://meta.stackoverflow.com/questions/425766/preview-of-search-and-question-asking-powered-by-genai?cb=1", 
        "https://meta.stackoverflow.com/questions/425872/collections-a-new-feature-for-collectives-on-stack-overflow?cb=1", 
        "https://meta.stackoverflow.com/questions/425999/should-code-only-answers-that-promote-the-authors-library-be-flagged?cb=1", 
        "https://meta.stackoverflow.com/questions/425988/may-old-questions-be-repeated-for-new-version-of-language-standard?cb=1",
    ];
    return (
        <AsideContainer>
            <SideBanner>
                <ul>
                    <sideTitle>The Overflow Blog</sideTitle>
                    <SideContent>
                        <span>
                            <FontAwesomeIcon icon={faPen} size="xs" />
                        </span>
                        <span>
                            <a href={link[0]}>
                                Why everyone should be an AppSec
                                specialist (Ep.598)
                            </a>
                        </span>
                    </SideContent>
                </ul>
                <ul>
                    <sideTitle>Featured on Meta</sideTitle>
                    <SideContent>
                        <span>
                            <FontAwesomeIcon icon={faMessage} className="icon-message" />
                        </span>
                        <span>
                            <a href={link[1]}>
                                Moderation strike: Results of negotiations
                            </a>
                        </span>
                    </SideContent>
                    <SideContent>
                        <span>
                            <FontAwesomeIcon icon={faMessage} className="icon-message" />
                        </span>
                        <span>
                            <a href={link[2]}>
                                Our Design Vision for Stack Overflow and
                                the Stack Exchange network
                            </a>
                        </span>
                    </SideContent>
                    <SideContent>
                        <span>
                            <FontAwesomeIcon icon={faStackOverflow} className="icon-message" />
                        </span>
                        <span>
                            <a href={link[3]}>
                                Temporary policy: Generate AI (e.g.,
                                ChatGPT) is banned
                            </a>
                        </span>
                    </SideContent>
                    <SideContent>
                        <span>
                            <FontAwesomeIcon icon={faStackOverflow} className="icon-message" />
                        </span>
                        <span>
                            <a href={link[4]}>
                                Preview of Search and Questions-Asking
                                Powered by GenAI
                            </a>
                        </span>
                    </SideContent>
                    <SideContent>
                        <span>
                            <FontAwesomeIcon icon={faStackOverflow} className="icon-message" />
                        </span>
                        <span>
                            <a href={link[5]}>
                                Collections: A New Feature for Collectives
                                on Stack Overflow
                            </a>
                        </span>
                    </SideContent>
                </ul>
                <ul>
                    <SideTitle>Hot Meta Posts</SideTitle>
                    <SideContent>
                        <span>12</span>
                        <span>
                            <a href={link[6]}>
                                Should code-only answers that promote
                                the author's library be flagged?
                            </a>
                        </span>
                    </SideContent>
                    <SideContent>
                        <span>12</span>
                        <span>
                            <a href={link[7]}>
                                May old questions be repeated for new
                                version of language standard?
                            </a>
                        </span>
                    </SideContent>
                </ul>
            </SideBanner>
        </AsideContainer>
    );    
};

export default Aside;