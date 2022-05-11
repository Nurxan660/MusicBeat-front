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
const Navbar = () => {
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
  const handleLogOut=()=>{
    logout(currentUser?.id).then(()=>{
        navigate('/')
        removeUser()
        authStore.setCurrentUser(undefined) 
        
    })
}
  return (
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
            <Link to="/about" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >About Us </a>
            </li>
            </Link>
            <Link to="/services" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Services</a>
            </li>
            </Link>
            <Link to="/blog" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Blog</a>
            </li>
            </Link>
            <Link to="/shazam" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Shazam</a>
            </li>
            </Link>
            
            {currentUser?(
              <li className="nav-item" >
              <a className="nav-link" onClick={handleLogOut}>LogOut</a>
            </li>
            ):(<Link to="/signin" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Sign In/Up</a>
            </li>
            </Link>)}
            <Link to="/playlist" className="nav-navigation">
            <li className="nav-item">
              <a className="nav-link" >Playlist</a>
            </li>
            </Link>
            {currentUser&&(
              <li className="nav-item">
              <a className="nav-link" >{currentUser.email}</a>
            </li>
            )}
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className={openInput?"form-control nav_search-input mr-sm-2":"form-control nav_search-input mr-sm-2 d-none"} type="search" placeholder="Search"
              aria-label="Search" value=""  />
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" onClick={handleInputClick}></button>
          </form>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Navbar