import React from 'react'
import Tennis from '../pages/Tennis';
import Sidebar from '../Sidebar';
import "./common.css";


function Ts() {
  return (
    <div className='content'>
      <Sidebar />
      <Tennis />
    </div>
  )
}

export default Ts;
