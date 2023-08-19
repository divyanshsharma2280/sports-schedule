import React from 'react'
import "./all.css"
import Ts from './components/finalpages/ts'
import Hk from './components/finalpages/hk'
import Fb from './components/finalpages/fb'
import BB from './components/finalpages/BB'
import Ck from './components/finalpages/ck'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='/' element={<Fb />} />
                <Route path='/hk' element={<Hk />} />
                <Route path='/ts' element={<Ts />} />
                <Route path='/ck' element={<Ck />} />
                <Route path='/BB' element={<BB />} />
            </Routes>       
        </div>
    </BrowserRouter>
  )
}

export default App;
