import styled from 'styled-components';
import './board.css';
import glassimg from './magnifying_glass.png';
import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { BoardList } from '../../component/BoardList/BoardList';
import axios from 'axios';

const SearchBox = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  width: 60vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`
const Glassimg = styled.input`
  width: 35px;
  height: 35px;
  background:url(glassimg);
  background-repeat: no-repeat;
  margin-right: 5px;
`
const Searchinput = styled.input`
  width: 60vw;
  border: none;
  font-size: 20px;
  margin-left: 5px;
  outline: none;
`
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
export function Board(){
  const [filter, setfilter] = useState('none');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [boardData, setBoardData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:4000')
  //   .then((res) =>{
  //     setBoardData(res)
  //     console.log(boardData)
  //   })
  // },[page,boardData,search]);

  function searchbox_submit(){

  }
  function makebutton(){
    let arr = []
    if(page < 3){
      for(let pageBidx = 1; pageBidx < 6 && pageBidx < maxPage; pageBidx++){
        console.log(page===pageBidx)
        arr.push(<PaginationButton onClick={()=>setPage(pageBidx)} className={page === pageBidx ? 'selected_page' : {}}>{pageBidx}</PaginationButton>)
      }
    }else{
      for(let pageBidx = page-2; pageBidx < page + showButton-2 && pageBidx < maxPage; pageBidx++){
      arr.push(<PaginationButton onClick={()=>setPage(pageBidx)} className={page === pageBidx ? 'selected_page' : {}} >{pageBidx}</PaginationButton>)
    }
    }
    return arr
  }
  let paginationarr = [];//

  for (let i = 0; i < 100; i++){
    paginationarr.push(i)
  }

  const numOfContent = 100;
  const showContent = 10;
  const showButton = 5;
  const maxPage = Math.ceil(numOfContent/showContent)+1;
  let arr = []
  arr = paginationarr.slice((page-1)*10,page*10)
  return(
    <div className = 'board'>
    <main className='board_container'>
      {/* <SearchBox onSubmit={searchbox_submit}>
        <Searchinput type='text' placeholder='찾기' onChange={(event) => setSearch(event.target.value)}></Searchinput>
        <Glassimg type='image' src={glassimg}></Glassimg>
      </SearchBox> */}
      <div className='filter_container'>
        <FilterSearch className={filter === 'new' ? 'filterselected' : {}} onClick={()=>setfilter('new')}>최신순</FilterSearch>
        <FilterSearch className={filter === 'view' ? 'filterselected' : {}} onClick={()=>setfilter('view')}>조회순</FilterSearch>
        <FilterSearch className={filter === 'alot' ? 'filterselected' : {}} onClick={()=>setfilter('alot')}>답변 많은 순</FilterSearch>
      </div>
      <Line></Line>
      <Link to="/boardpost" className='board_question'>질문하기</Link>
      <div className='boardlist_container'>
      {arr.map((ele)=><BoardList ele = {ele}/>)}
      <hr className='line'  ></hr>
      {makebutton()}
      </div>
    </main>
    </div>
  )
}