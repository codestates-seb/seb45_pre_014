import styled from 'styled-components';
import { useEffect, useState } from 'react';
import './board_note.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../component/Nav';
import Aside from '../../component/Aside';

const BoardNoteHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
`

const BoardNoteTitle = styled.h2`
  text-align: left;
  margin-bottom: 5px;
`

const BoardNoteElse = styled.div`
  font-size: 12px;
`

const BoardNoteProfile = styled.div`
  height: 50px;
  border: 0.2px solid black;
`

const BoardNoteEdit = styled.button`
  font-size: 12px;
`

const BoardNoteDelete = styled.button`
  font-size: 12px;
`
const Line = styled.hr`
  width: 60vw;
`

const BoardNoteNote = styled.div`
  min-height: 30vh;
  text-align: left;
`
const BoardNoteReplyCount = styled.h4`
  text-align: left;
`

const BoardNoteReply = styled.div`
  text-align: left;
`

const BoardNoteID = styled.div`
  text-align: right;
`
const BoardNoteMyReplyForm  = styled.form`
  display: flex;
  flex-direction: column;
`
const BoardNoteMyReplyTitle = styled.h3`
  text-align: left;
`
const BoardNoteMyReply = styled.textarea`
  resize: none;
  width: 60vw;
  
`
const BoardNoteMyReplyButton = styled.button`
  margin-right: auto;
  background-color: #0a95ff;
  border-radius: 5px;
  border: none;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  cursor: pointer;
  &:active{
    background-color: #0174cb;
  }
`

const DeletePopup = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`
const DeletePopupButton = styled.button`

`

const CancelPopupButton = styled.button`
`
export function BoardNote({boardNoteData, setBoardNoteData, url}){
  const [deletepopup, setdeletepopup] = useState(false);
  
  const [boardNotemyreply, setboardNotemyreply] = useState('')
  const [isMyBoard, setIsMyBoard] = useState(true);
  let param = useLocation();
  console.log(param.search.split('=')[1])
  let questionId = param.search.split('=')[1]
  useEffect(() => {
     axios.get(`${url}questions/${boardNoteData.questionId}`,{ withCredentials: true })
     .then((res) =>{
      setBoardNoteData((preDate)=>{return{...preDate,
        title:res.data.data.title,
        questionId:res.data.data.questionId,
        content:res.data.data.content,
        createdAt:res.data.data.createdAt,
        memberId:res.data.data.memberId,
        email:res.data.data.email,
        membername:res.data.data.membername,
        answers:res.data.data.answers
      }});
      console.log(res.data.data);
      console.log(boardNoteData);
      //  let userId = localStorage.getItem("memberId");
      // if (userId === bodardNoteData.memberId){
      //   setIsMyBoard(true);
      // }else{
      //   setIsMyBoard(false)
      // }
    })
    
    .catch(console.log('error'))
    
  },[isMyBoard]);

  function boardNotemyreplyPost(){
  //   axios.post(`ttps://7e9b-116-38-208-5.ngrok-free.app/api/v1/questions/${questionId}/answer`,{
  //     content: boardNotemyreply,
  //     memberId: userId,
  //     questionId: questionId
  //   })
  }


  return (
    <div className='board_note'>
      <Nav />
      <div className={ boardNoteData.title === '' ? {}:'board_note_container'}>
        <BoardNoteHead>
          <div className='title_andelse'>
            <BoardNoteTitle>{boardNoteData.title}</BoardNoteTitle>
            <BoardNoteElse>{boardNoteData.createdAt}</BoardNoteElse>
          </div>
          <div className='profile_edit_delete_button'>
            {/* <BoardNoteProfile>{boardNoteData.membername}</BoardNoteProfile> */}
            <div className={isMyBoard? 'edit_delete_button':'edit_delete_button_none'}>
              <Link to='/boardedit'><BoardNoteEdit>수정하기</BoardNoteEdit></Link>
              <BoardNoteDelete onClick= {()=>setdeletepopup(true)}>삭제하기</BoardNoteDelete>
            </div>
          </div>
        </BoardNoteHead>
        <Line></Line>
        <BoardNoteNote>{boardNoteData.content}</BoardNoteNote>
        <BoardNoteReplyCount>답변이 ~개 있습니다.</BoardNoteReplyCount>
        {/* {답변들 위치할 자리} */}
        <BoardNoteReply>대답대답~~~~</BoardNoteReply>
        <BoardNoteID>idid</BoardNoteID>
        <BoardNoteMyReplyForm>
          <BoardNoteMyReplyTitle>답변하기</BoardNoteMyReplyTitle>
          <BoardNoteMyReply rows='10' onChange={(ele)=>setboardNotemyreply(ele.target.value)}></BoardNoteMyReply>
          <Link to={`/boardnote/?questionId=${questionId}`} className = 'boardnotemyreplybuttonlink'><BoardNoteMyReplyButton onClick = { ()=>{ boardNotemyreplyPost(); setboardNotemyreply('')}}>답변하기</BoardNoteMyReplyButton></Link>
        </BoardNoteMyReplyForm>
      </div>
      <div className={deletepopup === true ? 'deletepopuptrue' : 'deletepopupfalse'}>
        <DeletePopup>
          <div>삭제 하시겠습니까?</div>
          <div className='delete_popup_buttons'>
            <Link to='/board/?page=1'><DeletePopupButton>삭제</DeletePopupButton></Link>
            <CancelPopupButton onClick={()=>setdeletepopup(false)}>취소</CancelPopupButton>
          </div>
        </DeletePopup>
      </div>
      <Aside></Aside>
    </div>
  )
}