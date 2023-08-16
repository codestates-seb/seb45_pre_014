import styled from 'styled-components';
import './board.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoardList } from '../../component/BoardList/BoardList';
import axios from 'axios';
import Nav from '../../component/Nav';
import Aside from '../../component/Aside';

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
  //   if(filter === 'none'){
  //     axios.get(`http://localhost:8080/questions/%7B${search}%7D`)
  //   .then((res) =>{
  //     setBoardData(res)
  //   })
  //   .catch(console.log('error'))
  //   }
  //   else{
  //     axios.get(`http://localhost:8080/questions/viewCount`)
  //   .then((res) =>{
  //     setBoardData(res)
  //   })
  //   .catch(console.log('error'))
  //   }
    
  // },[page,boardData,search,filter]);

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
        <FilterSearch 
          className={filter === 'new' ? 'filterselected' : {}} 
          onClick={filter === 'new' ? ()=>setfilter('none'):()=>setfilter('new')}>
          최신순
        </FilterSearch>
        <FilterSearch 
          className={filter === 'view' ? 'filterselected' : {}} 
          onClick={filter === 'view' ? ()=>setfilter('none'):()=>setfilter('view')}>
          조회순
        </FilterSearch>
        <FilterSearch 
          className={filter === 'alot' ? 'filterselected' : {}} 
          onClick={filter === 'alot' ? ()=>setfilter('none'):()=>setfilter('alot')}>
          답변 많은 순
        </FilterSearch>
      </div>
      <Line></Line>
      <Link to="/boardpost" className='board_question'>질문하기</Link>
      <div className='boardlist_container'>
      {arr.map((ele)=><BoardList key={ele.idx} title = {ele.title} id = {ele.id} time = {ele.time} view = {ele.view}/>)}
      <hr className='line'/>
      {makebutton()}
      </div>
    </main>
    <Aside />
    </div>
  )
}