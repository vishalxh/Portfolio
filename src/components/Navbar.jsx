import React from 'react'
import logo from '../assets/logo.png';
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6 '>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-1 w-14' src={logo} alt="logo"></img>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
        </div>
    </nav>
  )
}

export default Navbar