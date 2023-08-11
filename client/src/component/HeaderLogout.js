import { styled } from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBoxModal from "./SearchBoxModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  border-top: 2px solid #ef8236;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  z-index: 10;

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
  div.menu {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  div.menu:hover {
    cursor: pointer;
    background-color: #eee;
  }

  div.searchBoxWrap {
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
  width: 670px;
  border-radius: 2px;

  &:focus {
    outline: 0.5px solid #0eb4fc;
    box-shadow: 0 0 0 6px rgb(184, 223, 248, 0.4);
    border-radius: 2px;
  }
`;

const SearchBoxIcon = styled.span`
  position: absolute;
  top: 5px;
  left: 15px;
  color: #888;
`;

const LoginBtn = styled.button`
  background-color: #e1ecf4;
  border: 1px solid #bbd2e1;
  color: #39739d;
  width: 80px;
  height: 40px;
  border-radius: 5px;
  margin: 0 10px;

  &:hover {
    background-color: #b5d1e5;
    cursor: pointer;
  }
`;

const SignupBtn = styled(LoginBtn)`
  background-color: #0a95ff;
  border: 1px solid #81c5ff;
  color: #fff;

  &:hover {
    background-color: #007ad8;
    cursor: pointer;
  }
`;

const HeaderLogout = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Header>
      <HeaderWrap>
        <div className="menu">
          <GiHamburgerMenu />
        </div>
        <Mainlogo href="#">
          <span>Stack overflow</span>
        </Mainlogo>
        <Link to="/introduce">
          <ProductBtn>About</ProductBtn>
        </Link>
        <div className="searchBoxWrap">
          <SearchBox
            type="text"
            placeholder="Search..."
            onFocus={handleSearchFocus}
            onBlur={handleSearchFocus}
            className={isFocused ? "searchFocus" : ""}
          />
          <SearchBoxIcon>
            <Link to='/board'>
              <HiMagnifyingGlass size={20} />
            </Link>
            
          </SearchBoxIcon>
          <SearchBoxModal isFocused={isFocused} />
        </div>
        <Link to="/">
          <LoginBtn>Log In</LoginBtn>
        </Link>
        <Link to="/signup">
          <SignupBtn>Sign Up</SignupBtn>
        </Link>
      </HeaderWrap>
    </Header>
  );
};

export default HeaderLogout;