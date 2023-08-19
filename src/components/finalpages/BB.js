import React from 'react'
import Sidebar from '../Sidebar';
import Basketball from '../pages/Basketball';
import "./common.css";

function BB() {
  return (
    <div className='content'>
      <Sidebar/>
      <Basketball/>
    </div>
  )
}

export default BB;
