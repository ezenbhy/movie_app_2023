import React from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
        {/* 404 리다이렉트 처리 */}
        <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App