import { useState } from 'react' 
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"
import {Link} from 'react-scroll'
import { IoIosArrowDropup } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='w-[200px] text-xl hover:scale-110 duration-300'>Aliff Zaifuddin</h1>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li className='hover:scale-110 duration-300'>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:scale-110 duration-300'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FaBars className='cursor-pointer hover:scale-110 hover:duration-300'/> : <FaTimes className='cursor-pointer hover:scale-110 hover:duration-300'/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
            <a className='flex justify-between items-center w-full text-gray-300 pl-2' href='https://www.linkedin.com/in/aliffzaifuddin/' target="blank">
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-950'>
            <a className='flex justify-between items-center w-full text-gray-300 pl-2' href='https://github.com/aliffzaifuddin' target='blank'>
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
          <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300 pl-2'>
            Email <HiOutlineMail size={30}/>
          </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://docs.google.com/document/d/1p7lhNzLkoQVAVpi4ftqNTeghJWWhcxsMrzJjvJY04DQ/edit?usp=sharing' target="blank">
              CV/Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

      <div className='fixed bottom-0 right-0 text-2xl mr-5 mb-8 hover:scale-110 duration-300 animate-bounce '>
        <Link to="hero" smooth={true} duration={500}>
          <IoIosArrowDropup />
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar