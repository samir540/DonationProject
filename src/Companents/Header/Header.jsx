import React from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import {useEffect,useState} from 'react'
import Search from '../../pages/Search';
function Header() {
  const {pathname} = useLocation();
  const [modalSearch,setmodalSearch] = useState(false);
useEffect(()=>{
  window.scrollTo(0,0);
},[pathname])
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <NavLink to='/' className="header-logo-icon">
            <div className="header-logo">
            <i className="fa-brands fa-pagelines"></i>
            </div>
            <div className="header-heading">
              <h3>Həyat Fondu</h3>
            </div>
          </NavLink>
          <div className="header-menu">
            <ul>
              <NavLink className='li' to='/about'>Haqqımızda</NavLink>
              <NavLink className='li' to='/projects'>Sosyal Layihələr</NavLink>
              <NavLink className='li' to='/partners'>Tərəfdaşlar</NavLink>
              <NavLink className='li' to='/shop'>Mağaza</NavLink>
              <NavLink className='li' to='/contact'>Əlaqə</NavLink>
              <NavLink className='donate' to="/commondonate" >Ümumi İanə</NavLink>
              <NavLink className='loginer' to='/login'>Daxil Ol</NavLink>
            </ul>
          </div>
          <div className="header-icons">
            <div className="header-icons">
            <NavLink to='/addtobasket'>
            <i className="fa-solid fa-basket-shopping"></i>
            </NavLink>
                   <i onClick={()=>setmodalSearch(true)} className="fa-solid fa-magnifying-glass"></i>   
<div className="header-icon-menu">
<i class="fa-solid fa-bars"></i>
</div>
            </div>
          </div>
        </div>
      </div>
      {
        modalSearch && <Search setmodalSearch={setmodalSearch}/> 
      }
    </header>
  )
}

export default Header