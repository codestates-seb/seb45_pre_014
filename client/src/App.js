import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from './pages/Signup';
import { Board } from '../src/pages/board/board'
import { BoardPost } from '../src/pages/board_post/board_post'
import { BoardEdit } from './pages/board_edit/board_edit';
import { BoardNote } from './pages/board_note/board_note';
import  HeaderLogout  from './component/HeaderLogout'
import Footer from './component/Footer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <HeaderLogout/>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/board' element={<Board/>}></Route>
          <Route path='/boardpost' element={<BoardPost/>}></Route>
          <Route path='/boardedit' element={<BoardEdit/>}></Route>
          <Route path='/boardnote' element={<BoardNote/>}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
