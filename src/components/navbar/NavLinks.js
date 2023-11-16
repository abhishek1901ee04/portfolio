import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="https://twitter.com/abhitrivediee04" target='_blank' className='nav-link'><FaTwitter /></Link></li>
        <li onClick={handleNav} ><Link  to="https://www.linkedin.com/in/abhishek-trivedi-b8451019b/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="https://github.com/abhishek1901ee04" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><a  href="mailto:abhitrivediee04@gmail.com" className='nav-link'><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
