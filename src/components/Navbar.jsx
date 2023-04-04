import React, {useState}from 'react'
import {FaBars, FaTimes, FaQuestion} from 'react-icons/fa'
import {BsQuestionLg} from 'react-icons/bs'
import {TbWorld} from 'react-icons/tb'
import {HiBars3BottomLeft} from 'react-icons/hi2'

import crmLogo from '../assets/crmLogo.png'

import {Link} from 'react-scroll'


function Navbar (){

    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return(
        <>
        <div className='w-full h-[40px] flex justify-start px-4 mt-1 bg-[#fefefe] text-black'>
            <div className='ml-6 px-4 flex'>
                <h1 className='mr-2 flex'> <span className='mt-1'><TbWorld/></span> DE</h1>
                <h1 className='flex'>EN</h1>
            </div>
            <div className='px-4 flex'>
                <button className='border mr-2  border-white ml-1 h-7 w-20 bg-gray-100 hover:bg-gray-300 hover:underline flex justify-center'><span className='mt-1'><BsQuestionLg/></span> Help</button>
                <button className='border  border-white h-7 w-20 bg-gray-100 hover:bg-gray-300 hover:underline flex justify-center'>Search</button>
            </div>
           
        </div>
        <hr className=''></hr>
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#fefefe] text-black'>
            
            <div>
               {/* Hamburger Menu */}
                <div onClick={handleClick} className='z-10 ml-10 '>
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