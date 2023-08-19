import React from 'react'
import './Sidebar.css'
import { Link, useNavigate } from 'react-router-dom';
function Sidebar() {
  return (
    <div class="sidebar">
        <Link to="/"><div className="icon football">Football
        </div></Link>

        <Link to="/BB"><div className="icon basketball" ><button>Basketball</button>
         </div></Link>
         <Link to="/ck"><div className="icon cricket" >Cricket</div></Link>
         <Link to="/ts"><div className="icon tennis" >Tennis</div></Link>
         <Link to="/hk"><div className="icon hockey" >Hockey</div></Link>
    </div>
    
  )
}

export default Sidebar
