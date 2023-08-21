import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsPersonCircle } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { AiFillTrophy, AiFillQuestionCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBoxModal from "./SearchBoxModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = styled.header`
  width: 100%;
  border-top: 2px solid #ef8236;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  z-index: 10;
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;

const HeaderWrap = styled.div`
  width: 1260px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  .searchBoxWrap{
    position: relative;
  }

  .searchFocus {
    outline: 0.5px solid #0eb4fc;
    box-shadow: 0 0 0 6px rgb(184, 223, 248, 0.4);
    border-radius: 2px;
  }

  .hide {
    display: none;
  }
`;

const Mainlogo = styled.div`
  height: 50px;
  padding: 0 10px;
  background-image: url("https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 7px;
  
  &:hover {
    background-color: #eee;
  }

  > span {
    color: transparent;
  }
`;

const ProductBtn = styled.span`
  color: #777;
  padding: 5px 12px;
  margin: 0 5px;
  
  &:hover {
    background-color: #eee;
    border-radius: 20px;
    cursor: pointer;
  }
 `;

 const SearchBox = styled.input`
   border: 1px solid #ccc;
   padding: 7px 10px 7px 32px;
   width: 650px;
   border-radius: 2px;
`;

const SearchBoxIcon = styled.span`
  position: absolute;
  top: 5px;
  left: 15px;
  color: #888;
`;

const IconsBtnWrap = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  padding: 0;
  line-height: 55px;
`;

const IconsBtn = styled.li`
  height: 100%;
  display: inline-block;
  
  .mypageMoveBtn {
    color: #666;
    background-color: transparent;
    border: none;
    display: block;
    height: 50px;
    padding: 0 6px;
  }
  
  .mypageMoveBtn:hover {
    cursor: pointer;
    background-color: #eee;
  }
  
  &:hover path {
    color: #333;
  }
`;

const IconBtnA = styled.a`
  display: block;
  padding: 0 10px;
  height: 100%;
  position: relative;
  
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
  
  span.reputationCount {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    margin-left: 2px;
  }
  
  path {
    color: #666;
  }
  
  &:hover path {
    color: #333;
  }
`;

const LogoutBtn = styled.button`
  background-color: #0a95ff;
  border: 1px solid #81c5ff;
  color: #fff;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px;
  &:hover {
    background-color: #007ad8;
    cursor: pointer;
  }
`;

const HeaderLogin = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const handleLogout = () => {
    setIsLogIn(false);
    localStorage.clear();
  }

    return (
        <Header>
      <HeaderWrap>
        <Link to="/home">
          <Mainlogo>
            <span>Stack overflow</span>
          </Mainlogo>
        </Link>
        <Link to="/About">
          <ProductBtn>About</ProductBtn>
        </Link>
        <div className="searchBoxWrap">
          <SearchBox/>
          <SearchBoxIcon>
            <HiMagnifyingGlass size={20} />
          </SearchBoxIcon>
          <SearchBoxModal />
        </div>
        <IconsBtnWrap>
          <IconsBtn>
            <Link to='/info' className="mypageMoveBtn" >
              <BsPersonCircle size={20} />
              <span className="reputationCount">1</span>
            </Link>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <FaInbox size={20} />
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <AiFillTrophy size={20} />
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <AiFillQuestionCircle size={20} />
            </IconBtnA>
          </IconsBtn>
          <IconsBtn>
            <IconBtnA>
              <GiHamburgerMenu size={20} />
            </IconBtnA>
          </IconsBtn>
        </IconsBtnWrap>
        <Link to="/">
        <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
        </Link>
      </HeaderWrap>
    </Header>
    );
};

export default HeaderLogin;