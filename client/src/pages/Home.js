import Aside from "../component/Aside";
import { BoardList } from "../component/BoardList/BoardList";
import styled from "styled-components";
import Nav from "../component/Nav";

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
            <BoardList />
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