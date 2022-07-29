import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import {useEffect,useState} from 'react'
import Search from '../../pages/Search';
function Header() {
  const {pathname} = useLocation();
  const [modal,setModal] = useState(false)
useEffect(()=>{
  window.scrollTo(0,0);
},[pathname])
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <NavLink to='/' className="header-icon">
            <div className="header-logo-details">
              <div className="header-detail">
                <div className="header-detail-icon">
                  <i className="fa-solid fa-caret-up"></i>
                </div>
              </div>
            </div>
            <div className="header-heading">
              <h3>Afrika İanə</h3>
            </div>
          </NavLink>
          <div className="header-menu">
            <ul>
              <NavLink className='li' to='/about'>Haqqımızda</NavLink>
              <NavLink className='li' to='/projects'>Sosyal Layihələr</NavLink>
              <NavLink className='li' to='/partners'>Tərəfdaşlar</NavLink>
              <NavLink className={`li ${pathname.includes("details")?"active":""}`} to='/shop'>Mağaza</NavLink>
              <NavLink className='li' to='/contact'>Əlaqə</NavLink>
              <NavLink className='donate' to='/donate' >Ianə et</NavLink>
              <NavLink className='loginer' to='/login'>Daxil Ol</NavLink>
            </ul>
          </div>
          <div className="header-search">
            <div className="header-search-icon">
            <NavLink to='/addtobasket'>
            <i className="fa-solid fa-basket-shopping"></i>
            </NavLink>
                  
                   <i onClick={()=>setModal(true)} className="fa-solid fa-magnifying-glass"></i>   
                        
            </div>
          </div>
        </div>
      </div>
      {
        modal && <Search setModal={setModal}/> 
      }
    </header>
  )
}

export default Header