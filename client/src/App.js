import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from './pages/Signup';
import { Board } from '../src/pages/board/board'
import { BoardPost } from '../src/pages/board_post/board_post'
import { BoardEdit } from './pages/board_edit/board_edit';
import { BoardNote } from './pages/board_note/board_note';

import  HeaderLogout  from './component/HeaderLogout';
import { MemeberInfo } from './pages/member_info/member_info';
import { useState } from "react";
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [search, setSearch] = useState('');
  const [boardEditData, setboardEditData] = useState('')
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderLogout setSearch = {setSearch}/>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />

          <Route path='/board' element={<Board search = {search}/>} ></Route>
          <Route path='/home' element={<Home />} />


          <Route path='/boardpost' element={<BoardPost/>}></Route>
          <Route path='/boardedit' element={<BoardEdit boardEditData = {boardEditData}/>}></Route>
          <Route path='/boardnote' element={<BoardNote setboardEditData = {setboardEditData}/>}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
