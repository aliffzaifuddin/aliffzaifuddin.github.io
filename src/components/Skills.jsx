import CSS from '../assets/css.svg'
import HTML from '../assets/html.svg'
import ReactIcon from '../assets/react.svg'
import Tailwind from '../assets/tailwindcss.svg'
import Node from '../assets/node.svg'
import Express from '../assets/express.svg'
import Mongo from '../assets/mongo.svg'
import Github from '../assets/github.svg'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4'>Skills</p>
          <p className='py-4'>These are the tech stack I have worked before</p>
        </div>

        <div className='w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div>
            <p className='text-xl font-semibold p-2'>Front-End</p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"></img>
                <p className='my-4'>HTML</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon"></img>
                <p className='my-4'>CSS</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactIcon} alt="HTML icon"></img>
                <p className='my-4'>React</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon"></img>
                <p className='my-4'>Tailwind</p>
              </div>
            </div>
          </div>
          
          <div>
            <p className='text-xl font-semibold p-2'>Back-End</p>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon"></img>
                <p className='my-4'>NodeJS</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto invert' src={Express} alt="HTML icon"></img>
                <p className='my-4'>Express</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon"></img>
                <p className='my-4'>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills