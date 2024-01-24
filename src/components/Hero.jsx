
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-white'>Hi my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-slate-300'>Aliff Zaifuddin</h1>
        <h2 className='text-3xl sm:text-4xl font-bold text-slate-200'>I am a Full stack Developer</h2>
        <p className='text-gray-300 py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus cupiditate sit quidem perferendis. Dolore perferendis ratione iure voluptas eligendi explicabo? Accusamus nemo laborum, autem ipsam obcaecati rerum soluta magnam?</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 m-2 flex items-center hover:bg-slate-500'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 hover:' />
            </span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Hero