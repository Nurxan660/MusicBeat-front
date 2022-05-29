import React, { useState } from 'react'
import "../css/style.css"
import "../css/bootstrap.css"
import "../css/responsive.css"
import logo from '../../images/iconlight.png'
import { Link } from 'react-router-dom'
import { logout } from '../../service/authService'
import { removeUser } from '../../store/tokenService'
import { getUser } from '../../service/tokenService'
import { useNavigate } from 'react-router-dom'
import authStore from '../../store/authStore'
import profile from '../../images/profile.png'
import ProfileMenu from './ProfileMenu'
const Navbar = () => {
  const anchorRef = React.useRef(null);

  const currentUser=getUser()
  const [open,setOpen]=useState(false);
  const [openInput,setOpenInput]=useState(false)
  const navigate=useNavigate()
  const handleClick=(e)=>{
    setOpen(!open)
  }
  const handleInputClick=(e)=>{
    e.preventDefault();
    setOpenInput(!openInput)
  }
 
  return (
    <>
    <header className="header_section">
    <div className="container">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" >
          <div className="logo_box">
            <img src={logo} alt="" />
          </div>
        </a>
        <button className={open?"navbar-toggler":"navbar-toggler collapsed"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded={open} aria-label="Toggle navigation" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={open?'collapse navbar-collapse show':'collapse navbar-collapse'} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-2">
          <Link to="/" className="nav-navigation">
            <li className="nav-item active">
              <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to="/search" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Search</a>
            </li>
            </Link>
            
            <Link to="/shazam" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Shazam</a>
            </li>
            </Link>
            
            {currentUser?(
              <>
              <Link to='/user/playlists' className="nav-item">
              <li className="nav-item" >
              <a className="nav-link" >Playlists</a>
            </li>
            </Link>
              
            </>
            ):(<Link to="/signin" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Sign In/Up</a>
            </li>
            </Link>)}
            
            {currentUser&&(
              <li className="nav-item-email" ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={()=>authStore.setOpenNavbar(!authStore.openNavbar)}>
                <img src={profile} />
              <a className="nav-link-email" >{currentUser.email}</a>
            </li>
            )}
            
          </ul>
         
        </div>
      </nav>
    </div>
    
  </header>
  <ProfileMenu anchorRef={anchorRef}/>
  </>
  )
}

export default Navbar