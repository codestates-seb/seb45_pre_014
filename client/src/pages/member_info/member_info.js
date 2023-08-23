import styled from 'styled-components';
import './member_info.css'
const UserIcon = styled.div`
  width: 100px;
  height: 100px;
  background-color: purple;
`

const UserName = styled.div`
  text-align: left;
  margin-top: 30px;
  margin-left: 20px;
  font-size: large;
`

const UserChange = styled.button`
  background-color: #eefbff;
  border-radius: 5px;
  border: #0a95ff solid 0.5px;
  color: gray;
  width: 80px;
  height: 25px;
  font-size: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  line-height: 25px;
  margin-right: 10px;
  &:hover{
    background-color: #0a95ff;
    color: white;
  }
`
const UserQuit = styled.button`
  background-color: #eefbff;
  border-radius: 5px;
  border: #0a95ff solid 0.5px;
  color: gray;
  width: 80px;
  height: 25px;
  font-size: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  line-height: 25px;
  &:hover{
    background-color: #0a95ff;
    color: white;
  }
`
export function MemeberInfo(){
  return (
    <div className="memberinfo">
      <main className='memberinfo_container'>
        <div className='usericon_username_userquit_container'>
          <div className='usericon_username_container'>
            <UserIcon />
            <UserName>얼떨결에</UserName>
          </div>
          <div className='userchange_userquit_container'>
            <UserChange>수정하기</UserChange>
            <UserQuit>탈퇴하기</UserQuit>
          </div>
        </div>
      </main>
    </div>
  )
}