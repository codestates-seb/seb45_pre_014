import styled from 'styled-components';
import './BoardList.css'
import { Link } from 'react-router-dom';
const Board = styled.div`
  background-color: white;
  width: 60vw;
  max-width: 890px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
`
const BoardTitle = styled.div`
  color: #0374cc;
  font-size: 25px;
  text-decoration-line: none;
  &:hover {
    color: #0000ab;
  }
  &:active {
    color: black;
  }
`

const OwnerID = styled.div`
  font-size: 15px;
  text-align:left;
`


const LastAnswer = styled.div`
  font-size: 10px;
  margin-right: 5px;
  margin-top: 130px;
`
export function BoardList({title, view, id, time, questionId}){
  console.log(id)
  time = time.slice(0,4) + "년" + time.slice(5,7) + "월" + time.slice(8,10) + '일' + (parseInt(time.slice(11,13))+9) + '시'+(parseInt(time.slice(14,16))+9) + '분'; 
  return (
      <Board>
        <div className='boardTitle_viewcount_container'>
        <Link to={`/boardnote/?questionId=${questionId}`}><BoardTitle>{title}</BoardTitle></Link>
          <OwnerID>{id}</OwnerID>
        </div>
        <div className='_lastanswer_container'>
          <LastAnswer>{time}</LastAnswer>
        </div>
      </Board>
  )
}