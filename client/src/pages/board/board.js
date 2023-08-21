import styled from 'styled-components';
import './board.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
export function Board( {search, url}){
  let pageparam = useLocation();
  console.log(pageparam.search.split('=')[1]);
  const [filter, setfilter] = useState('none');
  const [page, setPage] = useState(parseInt(pageparam.search.split('=')[1]));
  const [boardData, setBoardData] = useState([]);
  const [totalEle, setTotalEle] = useState(0);

  useEffect(() => {
    if(filter !== 'view'){
      axios.get(`${url}questions?page=1&size=10`,{ withCredentials: true })
    .then((res) =>{
      console.log(res.data)
      setBoardData(res.data.data)
      setTotalEle(res.data.pageInfo.totalpage)
    })
    .catch(console.log('error'))
    }
    // else if(filter === 'view'){
    //   axios.get(`http://localhost:8080/questions/viewCount`)
    // .then((res) =>{
    //   setBoardData(res.data)
    // })
    // .catch(console.log('error'))
    // }
    
  },[page,search,filter]);

  let numOfContent = totalEle;
  let showContent = 10;
  let showButton = 5;
  let maxPage = Math.ceil(numOfContent/showContent)+1;

  function makebutton(){
    let arr = []
    if(page < 3){
      for(let pageBidx = 1; pageBidx < 6 && pageBidx < maxPage; pageBidx++){
        arr.push(<Link to={`/board/?page=${pageBidx}`}><PaginationButton key={pageBidx} onClick={()=>setPage(pageBidx)} className={page === pageBidx ? 'selected_page' : {}}>{pageBidx}</PaginationButton></Link>)
      }
    }else{
      for(let pageBidx = page-2; pageBidx < page + showButton-2 && pageBidx < maxPage; pageBidx++){
      arr.push(<Link to={`/board/?page=${pageBidx}`}><PaginationButton key={pageBidx} onClick={()=>setPage(pageBidx)} className={page === pageBidx ? 'selected_page' : {}} >{pageBidx}</PaginationButton></Link>)
    }
    }
    return arr
  }

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
      {boardData.map((ele)=><BoardList key={ele.questionId} title = {ele.title} id = {ele.username} time = {ele.createdAt} view = {"no"}/>)}
      <hr className='line'/>
      {makebutton()}
      </div>
    </main>
    <Aside />
    </div>
  )
}