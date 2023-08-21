import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from './pages/Signup';
import { Board } from '../src/pages/board/board'
import { BoardPost } from '../src/pages/board_post/board_post'
import { BoardEdit } from './pages/board_edit/board_edit';
import { BoardNote } from './pages/board_note/board_note';
import  HeaderLogout  from './component/HeaderLogout';
import HeaderLogin from './component/HeaderLogin';
import  Mypage  from './pages/Mypage';
import { useState, useEffect } from "react";
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [search, setSearch] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [boardNoteData, setBoardNoteData] = useState({
    questionId: 1,
    title: '',
    content: "",
    createdAt: "",
    memberId: 1,
    email: "",
    membername: "",
    answers: []
  });
  const url = 'http://ec2-54-180-29-155.ap-northeast-2.compute.amazonaws.com:8080/';
  useEffect(()=>{
    if(localStorage.length === 0){
      setIsLogin(false)
    }else{
      setIsLogin(true)
    }
  },[])
  return (
    <BrowserRouter>
      <div className='App'>
        {isLogin? <HeaderLogin url={url} setIsLogin = {setIsLogin}/>:<HeaderLogout setSearch = {setSearch} url={url}/>}
        <Routes>
          <Route path='/' element={<LoginPage url={url} setIsLogin={setIsLogin}/>} />
          <Route path='/signup' element={<Signup url={url}/>} />
          <Route path='/about' element={<About url={url}/>} />
          <Route path='/info' element={<Mypage url={url}/>}/>
          <Route path='/board' element={<Board search = {search} url={url}/>} ></Route>
          <Route path='/home' element={<Home url={url}/>} />

          
          <Route path='/boardpost' element={<BoardPost url={url}/>}></Route>
          <Route path='/boardedit' element={<BoardEdit boardNoteData = {boardNoteData} setBoardNoteData={setBoardNoteData} url={url}/>}></Route>
          <Route path='/boardnote' element={<BoardNote boardNoteData = {boardNoteData} setBoardNoteData={setBoardNoteData} url={url}/>}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
