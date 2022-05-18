import React,{useState} from 'react'
import Info from './Info'
import MusicPlayerFooter from './MusicPlayerFooter'
import { getUser } from '../../service/tokenService'
const Footer = ({player}) => {
  const user=getUser()
  
  return (
    <footer>
    {user?
    <MusicPlayerFooter player={player} />:
    <Info/>
    }
    
    <section className="container-fluid footer_section">
    <p>
      Copyright &copy; 2022 All Rights Reserved By
      <a href="https://rapidapi.com/search/spotify">music APIs</a>
    </p>
  </section>
  </footer>
  )
}

export default Footer