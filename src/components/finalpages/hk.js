import React from 'react'
import Hockey from '../pages/Hockey'
import Sidebar from '../Sidebar'
import "./common.css";

function Hk() {
  return (
    <div className='content'>
      <Sidebar />
      <Hockey />
    </div>
  )
} 

export default Hk;