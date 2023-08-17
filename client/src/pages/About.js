import styled from "styled-components";
import Nav from "../component/Nav";
import HeaderLogin from "../component/HeaderLogin";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";


const IntroduceWrap = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  h1 {
    text-align: left;
  }
  div.introWrap {
    display: flex;
    align-content: space-between;
    align-items: center;
  } 
`;

const IntroduceContent = styled.div`
  width: 260px;
  height: 300px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 5px 0 #ccc;
  
  img.imageSize {
    width: 200px;
    height: 200px;
  }

  span.githubTag {
    color: black;
    font-size: 20px;
    padding: 0 5px;
  }
`;

const About = () => {
    return (
        <>
        <main>
            <Nav />
            <IntroduceWrap>
                <div>
                    <h1>Back-End</h1>
                    <div className="introWrap">
                        <IntroduceContent>
                            <img src={person1} className="imageSize" alt="person1" />
                            <p>[BE] 홍기현</p>
                            <span className="githubTag">Github:</span>
                            <a href="https://github.com/KIHYUN940">@KIHYUN940</a>
                        </IntroduceContent>
                        <IntroduceContent>
                            <img src={person2} className="imageSize" alt="person2" />
                            <p>[BE] 김종범</p>
                            <span className="githubTag">Github:</span>
                            <a href="https://github.com/kbj1212">@kjb1212</a>
                        </IntroduceContent>
                        <IntroduceContent>
                            <img src={person3} className="imageSize" alt="person3" />
                            <p>[BE] 박아름</p>
                            <span className="githubTag">Github:</span>
                            <a href="https://github.com/ararp1006">@ararp1006</a>
                        </IntroduceContent>
                    </div>
                </div>
                <div>
                    <h1>Front-End</h1>
                    <div className="introWrap">
                    <IntroduceContent>
                            <img src={person4} className="imageSize" alt="person4" />
                            <p>[FE] 유주성</p>
                            <span className="githubTag">Github:</span>
                            <a href="https://github.com/Juseong-Yu">@Juseong-Yu</a>
                        </IntroduceContent>
                        <IntroduceContent>
                            <img src={person5} className="imageSize" alt="person5" />
                            <p>[FE] 김동윤</p>
                            <span className="githubTag">Github:</span>
                            <a href="https://github.com/dongyunkim96">@dongyunkim96</a>
                        </IntroduceContent>
                        <IntroduceContent>

                        </IntroduceContent>
                    </div>
                </div>
            </IntroduceWrap>
        </main>
        </>
    );
};

export default About;
