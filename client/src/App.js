import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
