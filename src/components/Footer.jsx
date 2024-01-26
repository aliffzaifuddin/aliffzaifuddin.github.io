import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-max bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full border-t-2 border-slate-300 py-4'>
        <div className='flex flex-row justify-around max-w-[300px] w-full my-4 text-2xl '>
          <a href='https://github.com/aliffzaifuddin' target='blank'>
            <FaGithub /> 
          </a>
          | 
          <a href='https://www.linkedin.com/in/aliffzaifuddin/' target="blank">
            <FaLinkedin />
          </a>
        </div>
        Copyright © Aliff Zaifuddin 2024
      </div>
    </div>
  )
}

export default Footer