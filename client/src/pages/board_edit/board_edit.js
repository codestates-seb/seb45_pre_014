import styled from 'styled-components';
import './board_edit.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const BoardEdith1 = styled.h1`
  margin-right: auto;
`

const BoardEditForm = styled.form`
  display: flex;
  margin-right: auto;
  flex-direction: column;
`

const BoardEditTitleLabel = styled.h3`
  text-align: left;
`
const BoardEditTitle = styled.textarea`
  font-size: 20px;
  resize: none;
  width: 70vw;
`

const BoardEditTextLabel = styled.h3`
  text-align: left;
  margin-top: 25px;
`

const BoardEditText = styled.textarea`
  font-size: 20px;
  resize: none; 
  font-size: 15px;
  width: 70vw;
`

export function BoardEdit( {boardEditData} ){
  const [title, setTitle] = useState(boardEditData);
  const [problem, setProblem] = useState(boardEditData);

  function board_edit_post(){
    // axios.post('http://localhost:4000',{
    //   title: title,
    //   problem: problem,
    // })
  }
  return (
    <div className = 'board_edit'>
      <main className='board_edit_container'>
        <BoardEdith1>수정하기</BoardEdith1>
        <BoardEditForm onSubmit={board_edit_post}>
          <div className='board_edit_title_container'>
            <BoardEditTitleLabel>타이틀</BoardEditTitleLabel>
            <BoardEditTitle value ={title} cols="80" rows="1" name='board_edit_title' onChange={(event) => setTitle(event.target.value)}></BoardEditTitle>
          </div>
          <div className='board_edit_text_container'>
            <BoardEditTextLabel>문제가 무엇인가요?</BoardEditTextLabel>
            <BoardEditText value ={problem} cols="106" rows="20" name='board_edit_title' onChange={(event) => setProblem(event.target.value)}></BoardEditText>
          </div>
          <Link to='/boardnote' className='board_edit_question' onClick={board_edit_post}>수정하기</Link>
        </BoardEditForm>
      </main>
    </div>
  )
}