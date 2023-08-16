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

const ViewCount = styled.div`
  font-size: 15px;
  text-align:left;
`

const OwnerID = styled.div`
  font-size: 12px;
`
const LastAnswer = styled.div`
  font-size: 12px;
`
export function BoardList({title, view, id, time}){
  return (
      <Board>
        <div className='boardTitle_viewcount_container'>
        <Link to={`/boardnote/?questionId=${title}`}><BoardTitle>{title}</BoardTitle></Link>
          <ViewCount>{view}</ViewCount>
        </div>
        <div className='ownerid_lastanswer_container'>
          <OwnerID>{id}</OwnerID>
          <LastAnswer>{time}</LastAnswer>
        </div>
      </Board>
  )
}