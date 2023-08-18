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
import { useState } from "react";
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
  return (
    <BrowserRouter>
      <div className='App'>
        {isLogin? <HeaderLogin />:<HeaderLogout setSearch = {setSearch}/>}
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/info' element={<Mypage/>}/>
          <Route path='/board' element={<Board search = {search}/>} ></Route>
          <Route path='/home' element={<Home />} />

          
          <Route path='/boardpost' element={<BoardPost/>}></Route>
          <Route path='/boardedit' element={<BoardEdit boardNoteData = {boardNoteData} setBoardNoteData={setBoardNoteData}/>}></Route>
          <Route path='/boardnote' element={<BoardNote boardNoteData = {boardNoteData} setBoardNoteData={setBoardNoteData}/>}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
