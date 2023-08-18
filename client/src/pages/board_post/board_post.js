import styled from 'styled-components';
import './board_post.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const BoardPosth1 = styled.h1`
  margin-right: auto;
`

const BoardPostForm = styled.form`
  display: flex;
  margin-right: auto;
  flex-direction: column;
`

const BoardPostTitleLabel = styled.h3`
  text-align: left;
`
const BoardPostTitle = styled.textarea`
  font-size: 20px;
  resize: none;
  width: 70vw;
`

const BoardPostTextLabel = styled.h3`
  text-align: left;
  margin-top: 25px;
`

const BoardPostText = styled.textarea`
  font-size: 20px;
  resize: none; 
  font-size: 15px;
  width: 70vw;
`

export function BoardPost(){
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');

  function board_post_post(){
    let memberId = localStorage.getItem('memberId')
    console.log(memberId)
    axios.post('https://7e9b-116-38-208-5.ngrok-free.app/questions',{
      title : title,
      content : problem,
      memberId : 1
    })
  }
  return (
    <div className = 'board_post'>
      <main className='board_post_container'>
        <BoardPosth1>질문하기</BoardPosth1>
        <BoardPostForm onSubmit={board_post_post}>
          <div className='board_post_title_container'>
            <BoardPostTitleLabel>타이틀</BoardPostTitleLabel>
            <BoardPostTitle cols="80" rows="1" name='board_post_title' onChange={(event) => setTitle(event.target.value)}></BoardPostTitle>
          </div>
          <div className='board_post_text_container'>
            <BoardPostTextLabel>문제가 무엇인가요?</BoardPostTextLabel>
            <BoardPostText cols="106" rows="20" name='board_post_title' onChange={(event) => setProblem(event.target.value)}></BoardPostText>
          </div>
          <Link to='/board' className='board_post_question' onClick={board_post_post}>질문하기</Link>
        </BoardPostForm>
      </main>
    </div>
  )
}