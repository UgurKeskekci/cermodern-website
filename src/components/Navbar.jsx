import React, {useState}from 'react'
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaYoutube} from 'react-icons/fa'
import crmLogo from '../assets/crmLogo.png'

import {Link} from 'react-scroll'


function Navbar (){

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <>
        <div className='w-full h-[40px] flex justify-start px-4 bg-[#fefefe] text-black'>
            <div className='px-4 flex'>
                <h1>EN</h1>
                <h1>DE</h1>
            </div>
            <div className='px-4'>
                <button className='border'>? HELP</button>
                <button className='border'>Search</button>
            </div>
           
        </div>
        <hr className=''></hr>
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#fefefe] text-black'>
            
            <div>
               {/* Hamburger Menu */}
                <div onClick={handleClick} className='z-10 ml-6'>
                {!nav ? <FaBars/> : <FaTimes/>}
                </div>
                
            </div>

            <div>
               <img src={crmLogo} width='150px' className='mr-8'></img>
            </div>
        </div>
         

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 md:w-[700px] w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center tracking-[1px] overflow-hidden origin-left duration-1100'}>
          <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
            Anasayfa
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Hakkımda
            </Link></li>
          <li className='py-6 text-4xl'> 
            <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
            Yetenekler
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="work" smooth={true} duration={500}>
            Çalışmalar
            </Link></li>
          <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="contact" smooth={true} duration={500}>
            İletişim
            </Link></li>
        </ul>
        </>
    )
}

export default Navbar