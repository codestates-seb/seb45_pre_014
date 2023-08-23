import Aside from "../component/Aside";
import styled from "styled-components";
import Nav from "../component/Nav";
import image1 from "../assets/image1.jpg";

export const MainContainer = styled.div`
  display: flex;

  > div:first-child {
    width: 100%;
  }
  > div:last-child {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const Home = () => {
  return (
    <>
      <header>
      </header>
      <main>
        <Nav />
        <MainContainer>
          <div className="questions">
            <img src={image1} alt="image1" />
          </div>
          <div>
            <Aside />
          </div>
        </MainContainer>
      </main>
    </>
  );
};

export default Home;