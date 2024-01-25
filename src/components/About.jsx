
const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[900px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8'>
            <p className='text-4xl font-bold inline border-b-4'>About</p>
          </div>
          <div>

          </div>
        </div>
        <div className='max-w-[900px] w-full px-4 grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Welcome to my corner of the internet! I am Aliff, a software developer with a passion for crafting elegant solutions</p>
          </div>
          <div>
            <p>I specialize in creating user-friendly interfaces and tackling complex problems, covering areas from web development to software engineering. My coding journey began just a year ago when I started self-learning through various online resources. Working on diverse projects has not only improved my skills but also broadened my perspective. From modest beginnings to exciting challenges, my coding journey is a continuous evolution toward becoming a skilled developer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About