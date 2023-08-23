import styled from "styled-components";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCake } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiPencil } from "react-icons/hi"
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../component/Nav";

const MypageWrap = styled.section`
  width: 1100px;
  height: 800px;
  text-align: left;
  margin: 0 auto;
  padding: 30px;
  margin-left: 13rem;
`;

const ProfileBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px 10px;
  border: 1px solid #545454;
  margin: 0 5px;
  border-radius: 5px;
  color: #545454;
  font-size: 15px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
  span {
    padding: 0 10px 0 5px;
  }
`;

const MypageProfile = styled.div`
  display: flex;
  position: relative;
  color: #545454;
  div.profileContents {
    padding: 0 10px;
    h1 {
      margin-left: 13px;
      font-size: xx-large;
    }
    p {
      display: inline;
      padding: 0 10px;
      font-size: 14px;
    }
    svg {
      padding: 0 5px;
    }
  }
`;

const MypageCategoryWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
  .active {
    background-color: #f4852b;
    color: #fff;
  }
`;

const MypageCategoty = styled.li`
  display: inline-block;
  border-radius: 20px;
  padding: 5px 20px;
  cursor: pointer;
  font-size: 15px;
`;

const PostWrap = styled.div`
  position: relative;
  margin: 5px 0 10px 0;
  div {
    width: 70%;
    height: 100px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
  }
  &:last-child h1 {
    margin-top: 30px;
  }
`;
const Mypage = ({url}) => {
  const memberId = localStorage.getItem("memberId");
  const [membername, setMembername] = useState("");
  const URL = `${url}members/${memberId}`;

  useEffect(() => {
    const  mypageInfo = {
        memberId,
        membername,
    };    
    axios
      .get(URL, mypageInfo, { withCredentials: true })
      .then((res) => setMembername(res.data.membername))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header>
      </header>
      <main>
        <Nav />
        <MypageWrap>
          <MypageProfile>
            <div className="profileContents">
              <h1>{membername}</h1>
              <p>
                <MdCake />
                Member for 1 days
              </p>
              <p>
                <AiOutlineClockCircle />
                Last seen this week
              </p>
              <p>
                <FaRegCalendarAlt />
                Visited 1 days, 1 consecutive
              </p>
            </div>
            <ProfileBtn>
              <HiPencil size={15} />
              <span>Edit profile</span>
            </ProfileBtn>
          </MypageProfile>
          <MypageCategoryWrap>
            <MypageCategoty className="active">Profile</MypageCategoty>
            <MypageCategoty>Activity</MypageCategoty>
            <MypageCategoty>Saves</MypageCategoty>
            <MypageCategoty>Settings</MypageCategoty>
          </MypageCategoryWrap>
          <PostWrap>
            <h1>About</h1>
            <div></div>
          </PostWrap>
          <PostWrap>
            <h1>Posts</h1>
            <div></div>
          </PostWrap>
        </MypageWrap>
      </main>
    </>
  );
};

export default Mypage;