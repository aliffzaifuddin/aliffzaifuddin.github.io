// import { HiArrowNarrowRight } from "react-icons/hi";
import profilePic from '../assets/profile-pic.jpg'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div name="hero" className='w-full h-screen bg-[#0a192f] text-slate-300'>

      {/* Container */}
      <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className="max-w-[750px] md:flex md:items-center">
          <img src={profilePic} alt="profile-pic" className="rounded-full w-60 h-60 mx-10 my-5 sm:m-5" />
          <div>
            <p className='text-white'>Welcome to my coding journey</p>
            <h1 className='text-4xl sm:text-7xl md:text-6xl font-bold text-slate-300'>Aliff Zaifuddin</h1>
            <h2 className='text-xl sm:text-4xl font-bold text-slate-200'>A Passionate Software Developer</h2>
          </div>
        </div>
        <p className='text-gray-300 py-4 max-w-[700px]'>
          Embark on my coding journey where I transform concepts into robust solutions. Join me in the world of coding, one line at a time, crafting exceptional digital experiences together.
        </p>
        <div className="flex">
          <button className='text-white group border-2 px-6 py-3 m-2 flex items-center hover:bg-slate-500'>
            <Link className="flex items-center" to="work" smooth={true} duration={500}>
              View work
              {/* <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 hover:' />
              </span> */}
            </Link>
          </button>
          <button className='text-white group border-2 px-6 py-3 m-2 flex items-center hover:bg-slate-500 lg:hidden'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://docs.google.com/document/d/1p7lhNzLkoQVAVpi4ftqNTeghJWWhcxsMrzJjvJY04DQ/edit?usp=sharing' target="blank">
                CV/Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero