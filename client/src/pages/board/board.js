import styled from 'styled-components';
import './board.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoardList } from '../../component/BoardList/BoardList';
import axios from 'axios';
import Nav from '../../component/Nav'


const FilterSearch = styled.div`
width: 80px;
border: 1px solid #ccc;
padding: 5px;
border-collapse: collapse;
margin-left: 3px;
border-radius: 3px;
font-size: 12px;
cursor: pointer;
`

const Line = styled.hr`
width: 60vw;
max-width: 890px;
`

const PaginationButton = styled.button`
border: 0.5px solid black;
margin: 3px;
&:hover{
  background-color: #D5D9DB;
  color:black;
  cursor: pointer;
}
`
export function Board( {search} ){
  const [filter, setfilter] = useState('none');
  const [page, setPage] = useState(1);
  const [boardData, setBoardData] = useState([]);
  // useEffect(() => {
  //   axios.get('http://localhost:4000')
  //   .then((res) =>{
  //     setBoardData(res)
  //   })
  //   .catch(console.log('error'))
  // },[page,boardData,search]);

  function makebutton(){
    let arr = []
    if(page < 3){
      for(let pageBidx = 1; pageBidx < 6 && pageBidx < maxPage; pageBidx++){
        console.log(page===pageBidx)
        arr.push(<PaginationButton key={pageBidx} onClick={()=>setPage(pageBidx)} className={page === pageBidx ? 'selected_page' : {}}>{pageBidx}</PaginationButton>)
      }
    }else{
      for(let pageBidx = page-2; pageBidx < page + showButton-2 && pageBidx < maxPage; pageBidx++){
      arr.push(<PaginationButton key={pageBidx} onClick={()=>setPage(pageBidx)} className={page === pageBidx ? 'selected_page' : {}} >{pageBidx}</PaginationButton>)
    }
    }
    return arr
  }
  let paginationarr = [];//

  for (let i = 0; i < 100; i++){
    let tmp = {
      title: '제목' + i,
      id: 'id' + i,
      time: '시간' + i,
      view: 100,
      idx : i
    };
    paginationarr.push(tmp)
  }

  const numOfContent = 100;
  const showContent = 10;
  const showButton = 5;
  const maxPage = Math.ceil(numOfContent/showContent)+1;
  let arr = []
  arr = paginationarr.slice((page-1)*10,page*10)
  return(
    <div className = 'board'>
      <Nav />
    <main className='board_container'>
      <div className='filter_container'>
        <FilterSearch className={filter === 'new' ? 'filterselected' : {}} onClick={()=>setfilter('new')}>최신순</FilterSearch>
        <FilterSearch className={filter === 'view' ? 'filterselected' : {}} onClick={()=>setfilter('view')}>조회순</FilterSearch>
        <FilterSearch className={filter === 'alot' ? 'filterselected' : {}} onClick={()=>setfilter('alot')}>답변 많은 순</FilterSearch>
      </div>
      <Line></Line>
      <Link to="/boardpost" className='board_question'>질문하기</Link>
      <div className='boardlist_container'>
      {arr.map((ele)=><BoardList key={ele.idx} title = {ele.title} id = {ele.id} time = {ele.time} view = {ele.view}/>)}
      <hr className='line'  ></hr>
      {makebutton()}
      </div>
    </main>
    </div>
  )
}