import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
