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
  width: 3000px;
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
    width: 150px;
    height: 150px;
  }

  span.githubTag {
    color: black;
    font-size: 25px;
    padding: 0 5px;
  }
`;

const About = () => {
    return (
        <>
        <header>
            <HeaderLogin />
        </header>
        <main>
            <Nav />
            <IntroduceWrap>
                <div>
                    <h1>Back-End</h1>
                    <div className="introWrap">
                        <IntroduceContent>
                            <img src={person1} className="imageSize" alt="person1" />
                            <p>[BE] 홍기현</p>
                            <span className="githubTag">Github</span>
                            <span>@KIHYUN940</span>
                        </IntroduceContent>
                        <IntroduceContent>
                            <img src={person2} className="imageSize" alt="person2" />
                            <p>[BE] 김종범</p>
                            <span className="githubTag">Github</span>
                            <span>@kjb1212</span>
                        </IntroduceContent>
                        <IntroduceContent>
                            <img src={person3} className="imageSize" alt="person3" />
                            <p>[BE] 박아름</p>
                            <span className="githubTag">Github</span>
                            <span>@ararp1006</span>
                        </IntroduceContent>
                    </div>
                </div>
                <div>
                    <h1>Front-End</h1>
                    <div className="introWrap">
                    <IntroduceContent>
                            <img src={person4} className="imageSize" alt="person4" />
                            <p>[FE] 유주성</p>
                            <span className="githubTag">Github</span>
                            <span>@Juseong-Yu</span>
                        </IntroduceContent>
                        <IntroduceContent>
                            <img src={person5} className="imageSize" alt="person5" />
                            <p>[FE] 김동윤</p>
                            <span className="githubTag">Github</span>
                            <span>@dongyunkim96</span>
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
