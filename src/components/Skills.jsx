import ReactIcon from '../assets/react.svg'
import Tailwind from '../assets/tailwindcss.svg'
import Node from '../assets/node.svg'
import Express from '../assets/express.svg'
import Mongo from '../assets/mongo.svg'
import CRA from '../assets/create-react-app.svg'
import Vite from '../assets/vitejs.svg'
import Jira from '../assets/jira.svg'
import Javascript from '../assets/javascript.svg'
import Python from '../assets/python.svg'
import Firebase from '../assets/firebase.svg'
import Git from '../assets/git.svg'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-max md:h-5/6 text-gray-300 bg-[#0a192f] pt-20'>
      {/* container */}
      <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4'>Skills</p>
          <p className='py-4'>These are the tech stack I have worked before</p>
        </div>
        {/* Skills container */}
        <div className='w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div>
            <p className='text-xl font-semibold'>Language</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt="HTML icon"></img>
                <p className='my-4'>JavaScript</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="HTML icon"></img>
                <p className='my-4'>Python</p>
              </div>  
            </div>
          </div>

          <div>
            <p className='text-xl font-semibold'>Frameworks</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactIcon} alt="HTML icon"></img>
                <p className='my-4'>React</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon"></img>
                <p className='my-4'>Tailwind CSS</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon"></img>
                <p className='my-4'>Node.js</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Express} alt="HTML icon"></img>
                <p className='my-4'>Express.js</p>
              </div>
            </div>
          </div>

          <div>
            <p className='text-xl font-semibold'>Database</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt="HTML icon"></img>
                <p className='my-4'>MongoDB</p>
              </div>              
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Firebase} alt="HTML icon"></img>
                <p className='my-4'>Firebase</p>
              </div>              
            </div>
          </div>

          <div>
            <p className='text-xl font-semibold'>Tools</p>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Vite} alt="HTML icon"></img>
                <p className='my-4'>Vite</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CRA} alt="HTML icon"></img>
                <p className='my-4'>CRA</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Jira} alt="HTML icon"></img>
                <p className='my-4'>Jira</p>
              </div>
              <div className='m-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Git} alt="HTML icon"></img>
                <p className='my-4'>Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills